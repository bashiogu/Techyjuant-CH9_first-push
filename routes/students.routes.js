const express = require('express');
const { createStudent, getStudents, updateStudent, getStudentById, getStudentByName, deleteStudent } = require('../controllers/students.controllers');

const router = express.Router();




router.post('/create-student', createStudent);
router.get('/get-students', getStudents);
router.put('/update-students/:id', updateStudent);
router.get('/get-student/:id', getStudentById);
router.get('/get-student-by-name', getStudentByName);
router.delete('delete-student/:id', deleteStudent);




module.exports = router;