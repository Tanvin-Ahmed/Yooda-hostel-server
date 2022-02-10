const express = require("express");
const {
	CreateStudent,
	GetStudents,
	DeleteStudent,
	UpdateStudentsStatus,
	UpdateStudentInfo,
	FindOneStudent,
} = require("../students/student.controller");

const router = express.Router();

router.post("/create", CreateStudent);
router.get("/get/:page", GetStudents);
router.get("/find-one/:roll", FindOneStudent);
router.put("/update-status", UpdateStudentsStatus);
router.put("/update", UpdateStudentInfo);
router.delete("/delete/:id", DeleteStudent);

module.exports = router;
