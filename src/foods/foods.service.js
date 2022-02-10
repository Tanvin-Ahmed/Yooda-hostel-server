const foodPost = require("./foods.model");

module.exports.createFoodItem = async info => {
	return await foodPost.create(info);
};

module.exports.getFoodItems = async (limit, page) => {
	return await foodPost
		.find({})
		.limit(limit)
		.skip((page - 1) * limit);
};

module.exports.updateItem = async (info, _id) => {
	return await foodPost.findByIdAndUpdate(_id, info, { new: true });
};

module.exports.deleteItem = async _id => {
	return await foodPost.findByIdAndDelete(_id);
};
