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
			const id = mongoose.Types.ObjectId(previousDistribution._id);
			previousDistribution?.status?.forEach(status => {
				status[info.date[0]].forEach(stu => {
					if (stu === info.status[0][info.date[0]][0]) {
						return res
							.status(200)
							.json({ message: "Already Served!", error: false });
					} else {
						info.status[0][info.date[0]] = [
							stu,
							...info.status[0][info.date[0]],
						];
					}
				});
			});

			info.foodItemList = {
				...previousDistribution?.foodItemList,
				...info.foodItemList,
			};

			let updatedDistribution = await updateDistribution(id, info);
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
