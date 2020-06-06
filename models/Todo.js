const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Todo Schema
const TodoSchema = new Schema({
  story: {
    type: Schema.Types.ObjectId,
    ref: "stories",
    required: true
  },
  todoName: {
    type: String,
    required: true
  },
  assignee: {
    type: String
  }
});

module.exports = Todo = mongoose.model("todos", TodoSchema);
