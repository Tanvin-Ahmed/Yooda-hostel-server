const mongoose = require("mongoose");
const { app } = require("../config/config");

const distributionPost = new mongoose.Schema(
	{
		studentId: {
			type: "String",
			required: true,
		},
		date: {
			type: "String",
			required: true,
		},
		shift: {
			type: "String",
			required: true,
		},
		status: {
			type: "Array",
			required: true,
		},
		foodItemList: {
			type: "Array",
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model(app.distributionCollection, distributionPost);
