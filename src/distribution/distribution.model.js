const mongoose = require("mongoose");
const { app } = require("../config/config");

const distributionPost = new mongoose.Schema(
	{
		studentId: {
			type: String,
			required: true,
		},
		date: {
			type: Array,
			required: true,
		},
		shift: {
			type: Array,
			default: ["breakfast", "lunch", "dinner"],
		},
		status: {
			type: Array,
			required: true,
		},
		foodItemList: {
			type: Object,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model(app.distributionCollection, distributionPost);
