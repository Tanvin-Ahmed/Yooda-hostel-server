const mongoose = require("mongoose");
const { app } = require("../config/config");

const postStudent = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		age: {
			type: String,
			required: true,
		},
		class: {
			type: String,
			required: true,
		},
		roll: {
			type: String,
			required: true,
		},
		hall: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model(app.studentCollection, postStudent);
