const mongoose = require("mongoose");
const {
	createFoodItem,
	getFoodItems,
	updateItem,
	deleteItem,
	getAllFood,
} = require("./foods.service");

module.exports.CreateFoodItem = async (req, res) => {
	try {
		const info = req.body;
		const createdItem = await createFoodItem(info);
		return res.status(201).json(createdItem);
	} catch (error) {
		return res.status(500).json({ message: error.message, error: true });
	}
};

module.exports.GetFoodItems = async (req, res) => {
	try {
		const page = parseInt(req.params.page);
		const limit = 15;
		const createdItem = await getFoodItems(limit, page);
		return res.status(201).json(createdItem);
	} catch (error) {
		return res.status(500).json({ message: error.message, error: true });
	}
};

module.exports.GetAllFood = async (req, res) => {
	try {
		const allFood = await getAllFood();
		return res.status(200).json(allFood);
	} catch (error) {
		return res.status(404).json({ message: error.message, error: true });
	}
};

module.exports.UpdateFoodItem = async (req, res) => {
	try {
		const info = req.body;
		const _id = mongoose.Types.ObjectId(info._id);
		const updatedItem = await updateItem(info, _id);
		return res.status(201).json(updatedItem);
	} catch (error) {
		return res.status(500).json({ message: error.message, error: true });
	}
};

module.exports.DeleteFoodItem = async (req, res) => {
	try {
		const id = mongoose.Types.ObjectId(req.params.id);
		const deletedItem = await deleteItem(id);
		return res.status(201).json(deletedItem);
	} catch (error) {
		return res.status(404).json({ message: error.message, error: true });
	}
};
