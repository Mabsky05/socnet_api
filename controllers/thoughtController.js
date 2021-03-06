const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');

module.exports = {
  // GET all thoughts
  getThought(req, res) {
    Thought.find({})
    // .populate('reactionId')
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
},
  //   Thought.find()
  //     .then((thought) => res.json(thought))
  //     .catch((err) => res.status(500).json(err));
  // },

  // GET a thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then( async (thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // POST a thought
  createThought(req, res) {
    console.log("----------------");
    console.log(req.body)
    Thought.create(req.body)
      .then((thought) => res.json({message: "Thought successfully created"}))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // PUT update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'Thought blank' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },

  // DELETE a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No such thought!' })
          : res.json(user)
          // : Student.deleteMany({ _id: { $in: course.students } })
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },



// POST to create a reaction stored in a single thought's reactions array field
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No thought found' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

// DELETE to remove reaction from a thought
  removeReaction(req, res) {
    
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      // { $pull: { reactions: req.body } },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
      )
      
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: 'No reaction found' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  }
};

// BACKUP CODE
// removeReaction(req, res) {
//   const react_id = 
//   Thought.findOneAndDelete(
//     { _id: req.params.userId },
//     { $pull: { reactions: req.body } },
//     { runValidators: true, new: true }
//   )
//     .then((user) =>
//       !user
//         ? res
//             .status(404)
//             .json({ message: 'No reaction found' })
//         : res.json(student)
//     )
//     .catch((err) => res.status(500).json(err));
// },


