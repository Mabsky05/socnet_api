const { Schema } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      default: mongoose.ObjectId,
    },
    reactionBody: {
      type: String, 
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      lastActiveat: Date,
      default: lastActiveat,
      get: update,
    }
  }
);

module.exports = reactionSchema;