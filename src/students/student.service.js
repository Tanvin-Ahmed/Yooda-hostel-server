const postStudent = require("./student.model");

module.exports.createStudent = async info => {
	return await postStudent.create(info);
};

module.exports.getStudent = async (page, limit) => {
	return await postStudent
		.find({})
		.limit(limit)
		.skip((page - 1) * limit);
};

module.exports.updateStudentsStatus = async (updateStatus, ids) => {
	await postStudent.updateMany({ _id: ids }, { status: updateStatus });
	return await postStudent.find({ _id: ids });
};

module.exports.updateStudentInfo = async (info, id) => {
	return postStudent.findByIdAndUpdate(id, info, { new: true });
};

module.exports.deleteStudent = async _id => {
	return await postStudent.findByIdAndDelete(_id);
};
