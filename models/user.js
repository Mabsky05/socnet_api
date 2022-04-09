const mongoose = require('mongoose');

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      //must match valid email address, see mongoose matching validation
    },
    thoughts: {
      //array of _id values referencing Thought model
    },
    friends: {
      //array of _id values referencing User model (self-reference)
    },
  },
);
// Create a virtual called friendCount that 
// retrieves the length of the user's 
// friends array field on query.

module.exports = User;
