const router = require('express').Router();
const { 
  getThought,  
  getSingleThought,
  createThought,
  updateThought,
  deleteThought 
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThought).get(getSingleThought).post(createThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').get()//ADD HERE


module.exports = router;

// /ap
// /api/students
// router.route('/').get(getStudents).post(createStudent);

// // /api/students/:studentId
// router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);

// // /api/students/:studentId/assignments
// router.route('/:studentId/assignments').post(addAssignment);

// // /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

  
 