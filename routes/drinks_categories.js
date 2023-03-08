const express = require("express");
const Drinks_categories = require("../database/drinks_categories");
const router = express.Router()
router.get("/", async (req, res) => {
  const drink_categories = await Drinks_categories.findAll();
  res.json(drink_categories);
});

module.exports = router;