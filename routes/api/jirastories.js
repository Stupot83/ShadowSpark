const express = require("express");
const router = express.Router();
const passport = require("passport");

// Load Jirastory schema
const Jirastory = require("../../schemas/jiraStory");

// GET api/jirastories - Get all jirastories for a specific dev
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let jirastoriesArr = [];

    // Get Team Member projects
    await Jirastory.find({})
      .then(jirastories => {
        jirastories.map(jirastory => {
          jirastory.teamMembers &&
            jirastory.teamMembers.map(dev => {
              if (dev.email == req.dev.email) {
                jirastoriesArr.push(jirastory);
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

    // Get creator projects
    await Jirastory.find({ creator: CREATOR })
      .then(jirastories => {
        let resultArr = [...jirastories, ...jirastoriesArr];
        res.json(resultArr);
      })
      .catch(err => console.log(err));
  }
);

// GET api/jirastories/:id - Get specific jirastory by id
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.params.id;

    Jirastory.findById(id).then(jirastory => res.json(jirastory));
  }
);

// POST api/jirastories/create - Create a new jirastory
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const CREATOR = {
      id: req.dev.id,
      name: req.dev.name,
      email: req.dev.email
    };

    const NEW_JIRASTORY = await new Jirastory({
      creator: CREATOR,
      name: req.body.jirastoryName,
      teamMembers: req.body.members
    });

    NEW_JIRASTORY.save().then(jirastory => res.json(jirastory));
  }
);

// PATCH api/jirastories/update - Update an existing jirastory
router.patch(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let jirastoryFields = {};

    jirastoryFields.name = req.body.jirastoryName;
    jirastoryFields.teamMembers = req.body.members;

    Jirastory.findOneAndUpdate(
      { _id: req.body.id },
      { $set: jirastoryFields },
      { new: true }
    )
      .then(jirastory => {
        res.json(jirastory);
      })
      .catch(err => console.log(err));
  }
);

// DELETE api/jirastories/delete/:id - Delete an existing project
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Jirastory.findById(req.params.id).then(jirastory => {
      jirastory.remove().then(() => res.json({ success: true }));
    });
  }
);

module.exports = router;