const mongoose = require("mongoose");
const {
	createStudent,
	deleteStudent,
	getStudent,
	updateStudentsStatus,
	updateStudentInfo,
} = require("./student.service");

module.exports.CreateStudent = async (req, res) => {
	try {
		const info = req.body;
		const createdStudent = await createStudent(info);
		return res.status(200).json(createdStudent);
	} catch (error) {
		return res.status(500).json({ message: error.message, error: true });
	}
};

module.exports.GetStudents = async (req, res) => {
	try {
		const page = parseInt(req.params.page);
		const limit = 15;
		const students = await getStudent(page, limit);
		return res.status(200).json(students);
	} catch (error) {
		return res.status(500).json({ message: error.message, error: true });
	}
};

module.exports.UpdateStudentsStatus = async (req, res) => {
	try {
		const updateStatus = req.body.updateStatus;
		const Ids = [];
		req.body.ids.forEach(ID => {
			const id = mongoose.Types.ObjectId(ID);
			Ids.push(id);
		});
		const updatedInfo = await updateStudentsStatus(updateStatus, Ids);
		return res.status(200).json(updatedInfo);
	} catch (error) {
		return res.status(500).json({ message: error.message, error: true });
	}
};

module.exports.UpdateStudentInfo = async (req, res) => {
	try {
		const id = mongoose.Types.ObjectId(req.body._id);
		const info = req.body;
		const updatedInfo = await updateStudentInfo(info, id);
		return res.status(201).json(updatedInfo);
	} catch (error) {
		return res.status(500).json({ message: error.message, error: true });
	}
};

module.exports.DeleteStudent = async (req, res) => {
	try {
		const _id = mongoose.Types.ObjectId(req.params.id);
		const deletedStudent = await deleteStudent(_id);
		return res.status(200).json(deletedStudent);
	} catch (error) {
		return res.status(404).json({ message: error.message, error: true });
	}
};
