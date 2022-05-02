const { ObjectId } = require('mongoose').Types;
const { user, Thought } = require('../models');


module.exports = {
  // GET all users
  getUser(req, res) {
    user.find()
      .then(async (users) => {
        const userObj = {
          users,
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // GET a single user
  getSingleUser(req, res) {
    user.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // POST a new user
  createUser(req, res) {
    user.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // PUT update a user
  updateUser(req, res) {
    user.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
            )
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with this id!' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },

  // DELETE a user
  deleteUser(req, res) {
    user.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'That user does not exist' })
          : res.json(user)
          // : user.findOneAndUpdate(
          //     { users: req.params.userId },
          //     { $pull: { users: req.params.userId } },
          //     { new: true },
          //   )               
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Deleted and no thoughts found',
            })
          : res.json({ message: 'User successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //POST add a friend
  addFriend(req, res) {
    user.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  //DELETE remove a friend
  deleteFriend(req, res) {
    const id_del = { _id: req.params.userId };
    const id_addset = { $addToSet: { friends: req.body } }
    user.findOneAndDelete( id_del, id_addset
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },


  // BACKUP CODE
  // deleteFriend(req, res) {
  //   user.findOneAndDelete(
  //     { _id: req.params.userId },
  //     { $addToSet: { friends: req.body } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((user) =>
  //       !user
  //         ? res
  //             .status(404)
  //             .json({ message: 'No user found' })
  //         : res.json(user)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },


};
