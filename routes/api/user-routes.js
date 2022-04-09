const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/api/users').get(getUser).get(getSingleUser).post(createUser).put(updateUser).delete(deleteUser);

// /api/students/:studentId
router.route('/api/users/:userId/friends/:friendId'); //ADD FRIEND AND DELETE FRIEND LISTS

// /api/students/:studentId/assignments
router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;

