const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const moment = require('moment');
//install moment 

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
      get: (createAtDate) => moment(createAtDate).format("MMM DD, YYYY [at] hh:mm a")
    },      
    //getter method to format timestamp on query = date formatter, make in utils
    username: {
      type: String,
      required: true,
    },
    //reactions separate schema, should be imported as array
    reactions: [reactionSchema],
  }, {
      toJSON: {
      getters: true,
    },
    id: false,
  
  }
);
//write virtual for reaction count
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
