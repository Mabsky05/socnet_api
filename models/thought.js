const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const moment = require('moment');


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
    //Option: getter method to format timestamp on query = date formatter, make in utils
    username: {
      type: String,
      required: true,
    },
    //reactions separate schema imported as array
    reactions: [reactionSchema],
  }, {
      toJSON: {
      getters: true,
    },
    id: false,
  
  }
);
//write virtual for reaction count
thoughtSchema.virtual('reactionCount').get(function() {
  return reaction.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
