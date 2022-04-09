const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUser).get(getSingleUser).post(createUser);

// /api/students/:studentId
router.route('/:studentId').delete(deleteUser);

// /api/students/:studentId/assignments
router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;

