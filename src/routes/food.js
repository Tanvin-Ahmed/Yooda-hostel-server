const express = require("express");
const { route } = require(".");
const {
	CreateFoodItem,
	GetFoodItems,
	UpdateFoodItem,
	DeleteFoodItem,
	GetAllFood,
} = require("../foods/foods.controller");
const router = express.Router();

router.post("/create", CreateFoodItem);
router.get("/get/:page", GetFoodItems);
router.get("/get-all", GetAllFood);
router.put("/update", UpdateFoodItem);
router.delete("/delete/:id", DeleteFoodItem);

module.exports = router;
