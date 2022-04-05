const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minlength: 1,
      maxlength: 280,
      required: true,
    },
    createdAt: {
      //set default to current timestamp
      lastActiveAt: Date,

      default: lastActiveAt,

      //getter method to format timestamp on query
      get: update,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      type: String,
      required: true,
    }
  }
);

module.exports = thoughtSchema;
