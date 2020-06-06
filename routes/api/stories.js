const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Story schema
const Story = require("../../models/Story");

// Get all stories for a specific user
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let storiesArr = [];

    // Member stories
    await Story.find({})
      .then(stories => {
        stories.map(story => {
          story.teamMembers &&
            story.teamMembers.map(member => {
              if (member.email == req.user.email) {
                storiesArr.push(story);
              }
            });
        });
      })
      .catch(err => console.log(err));

    const OWNER = {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    };

    // Combine with owner stories
    await Story.find({ owner: OWNER })
      .then(stories => {
        let finalArr = [...stories, ...storiesArr];
        res.json(finalArr);
      })
      .catch((err) => console.log(err));
  }
);

// Get specific story by id
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.params.id;

    Story.findById(id).then(story => res.json(story));
  }
);

// Create a new story
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const OWNER = {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    };

    const NEW_STORY = await new Story({
      owner: OWNER,
      name: req.body.storyName,
      teamMembers: req.body.members
    });

    NEW_STORY.save().then(story => res.json(story)
    );
  }
);

// Update an existing story
router.patch(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let storyFields = {};

    storyFields.name = req.body.storyName;
    storyFields.teamMembers = req.body.members;

    Story.findOneAndUpdate(
      { _id: req.body.id },
      { $set: storyFields },
      { new: true }
    )
      .then(story => {
        res.json(story);
      })
      .catch(err => console.log(err));
  }
);

// Delete an existing story
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Story.findById(req.params.id).then(story => {
      story.remove().then(() => res.json({ success: true }));
    });
  }
);

module.exports = router;