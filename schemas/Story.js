const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the jiraStory Schema
const StorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  creator: {
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