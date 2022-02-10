const distributionPost = require("./distribution.model");

module.exports.createDistribution = async info => {
	return await distributionPost.create(info);
};

module.exports.getDistribution = async studentId => {
	return await distributionPost.findOne({ studentId: studentId });
};

module.exports.updateDistribution = async (id, info) => {
	return await distributionPost.findByIdAndUpdate(id, info, { new: true });
};
