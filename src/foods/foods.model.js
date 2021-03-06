const mongoose = require("mongoose");
const { app } = require("../config/config");

const foodPost = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = mongoose.model(app.foodCollection, foodPost);
