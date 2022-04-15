const { Schema, model } = require('mongoose');

const userSchema = new Schema(
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
      validate: {
        validator: function(v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        }, message: "Please enter valid email"
      },
      friends:[{type: Schema.Types.ObjectId, ref: 'user' }]
    },
          //array of _id values referencing Thought model,
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
  ], 
        //array of _id values referencing User model (self-reference)
      friends:[ {
      type: Schema.Types.ObjectId,
      ref: 'user',
    }, 
  ], 
},
  {
    toJSON: {
      getters: true,
    }, 
  }
);
userSchema.virtual('friendCount').get(function() {
  return friends.length
})

const User = model('user', userSchema);

module.exports = User;
