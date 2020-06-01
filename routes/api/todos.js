const express = require("express");
const router = express.Router();
const passport = require("passport");

const Todo = require("../../models/Todo");

// Get Todos for specific Story
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.params.id;

    Todo.find({ story: id }).then(todos => res.json(todos));
  }
);

// Create a new Todo
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const NEW_TODO = new Todo({
      story: req.body.story,
      todoName: req.body.todoName,
      assignee: req.body.assignee
    });

    NEW_TODO.save()
      .then(todo => res.json(todo))
      .catch(err => console.log(err));
  }
);

// Delete an existing Todo
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Todo.findById(req.params.id).then(todo => {
      todo.remove().then(() => res.json({ success: true }));
    });
  }
);

// Update an existing Todo
router.patch(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let todoFields = {};

    todoFields.todoName = req.body.todoName;
    todoFields.assignee = req.body.assignee;

    Todo.findOneAndUpdate(
      { _id: req.body.id },
      { $set: todoFields },
      { new: true }
    )
      .then(todo => {
        res.json(todo);
      })
      .catch(err => console.log(err));
  }
);

module.exports = router;
