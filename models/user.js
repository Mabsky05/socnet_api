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
    },
          //array of _id values referencing Thought model,
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
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
      getters: false,
      virtuals:true
    }, 
    id:false
  }
);

userSchema
.virtual('friendCount')
.get(function () {
return this.friends
});


const User = model('user', userSchema);

module.exports = User;
