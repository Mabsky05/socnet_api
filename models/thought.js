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
      type: Date,
      default: Date.now,
    },      
    //getter method to format timestamp on query
    username: {
      type: String,
      required: true,
    },
    reactions: {
      type: String,
      required: true,
    },
  }, {
      toJSON: {
      getters: true,
    },
    id: true,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
