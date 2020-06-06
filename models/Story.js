const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Story Schema
const StorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Object,
    required: true
  },
  teamMembers: [
    {
      email: {
        type: String
      },
      name: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Story = mongoose.model("stories", StorySchema);