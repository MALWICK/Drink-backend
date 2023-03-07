const express = require("express");
const DrinksIngredients = require("../database/drinks_ingrdients");
const router = express.Router();
router.get("/", async (req, res) => {
  const ingredients = await DrinksIngredients.findAll();
  res.json(ingredients);
});
router.post("/", async (req, res) => {
  const { drink_name, description } = req.body;
  const ingredients = await DrinksIngredients.create({
    drink_name,
    description,
  });
  res.json(ingredients);
});
router.get("/:id", async (req, res) => {
  const ingredients = await DrinksIngredients.findByPk(req.params.id);
  res.send(ingredients);
});

module.exports = router;
