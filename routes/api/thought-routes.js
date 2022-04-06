const router = require('express').Router();
const { thought, user } = require('../../models');


router.get('/', async (req,res) => {
  try { const thoughtData = await thought.findAll()
      res.status(200).json(thoughtData);
  } catch (err) {
      res.status(500).json(err)
  }
});

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
