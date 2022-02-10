const mongoose = require("mongoose");
const {
	getDistribution,
	updateDistribution,
	createDistribution,
} = require("./distribution.service");

module.exports.CreateOrUpdateDistribution = async (req, res) => {
	try {
		const info = req.body;
		const previousDistribution = await getDistribution(info.studentId);

		if (previousDistribution) {
			const updatedDistribution = await updateDistribution(id, info);
			return res.status(201).json(updatedDistribution);
		} else {
			const createdDistribution = await createDistribution(info);
			return res.status(201).json(createdDistribution);
		}
	} catch (error) {
		return res.status(500).json({ message: error.message, error: true });
	}
};

module.exports.GetDistribution = async (req, res) => {
	try {
		const id = mongoose.Types.ObjectId(req.params.studentId);
		const distribution = await getDistribution(id);
		return res.status(200).json(distribution);
	} catch (error) {
		return res.status(404).json({ message: error.message, error: true });
	}
};
