const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the Devs Schema
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now,
    },
});

const Dev = mongoose.model("devs", DevSchema);

module.exports = Dev;
