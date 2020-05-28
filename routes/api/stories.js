const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Story schema
const Story = require("../../schemas/Story");

// GET api/stories - Get all stories for a specific dev
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let storiesArr = [];

    // Get Team Member stories
    await Story.find({})
      .then(stories => {
        stories.map(story => {
          story.teamMembers &&
            story.teamMembers.map(dev => {
              if (dev.email == req.dev.email) {
                storiesArr.push(story);
              }
            })
        });
      })
      .catch(err => console.log(err));

    const CREATOR = {
      id: req.dev.id,
      name: req.dev.name,
      email: req.dev.email
    };

    // Get creator stories
    await Story.find({ creator: CREATOR })
      .then(stories => {
        let resultArr = [...stories, ...storiesArr];
        res.json(resultArr);
      })
      .catch(err => console.log(err));
  }
);

// GET api/stories/:id - Get specific story by id
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.params.id;

    story.findById(id).then(story => res.json(story));
  }
);

// POST api/stories/create - Create a new story
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const CREATOR = {
      id: req.dev.id,
      name: req.dev.name,
      email: req.dev.email
    };

    const NEW_STORY = await new Story({
      creator: CREATOR,
      name: req.body.storyName,
      teamMembers: req.body.members
    });

    NEW_STORY.save().then(story => res.json(story));
  }
);

// PATCH api/stories/update - Update an existing story
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

// DELETE api/stories/delete/:id - Delete an existing story
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    story.findById(req.params.id).then(story => {
      story.remove().then(() => res.json({ success: true }));
    });
  }
);

module.exports = router;