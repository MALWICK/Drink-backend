/* const express = require("express");
const Drinks_categories = require("../database/drinks_categories");
const router = express.Router()
router.get("/", async (req, res) => {
  const drink_categories = await Drinks_categories.findAll();
  res.json(drink_categories);
});
router.post("/", async (req, res) => {
  const { drinks_name, description } = req.body;
  const drink_ingredients = await DrinksIngredients.create();
  res.json(drink_ingredients);
});
router.get("/:id", async (req, res) => {
  const drink_ingredients = await DrinksIngredients.findByPk(req.params.id);
  res.send(drink_ingredients);
});
router.post("/", async (req, res) => {
  const { drinks_name, description } = req.body;
  const drink_ingredients = await DrinksIngredients.create({
    drinks_name,
    description,
  });
  res.json(drink_ingredients);
});
router.put("/:id", async(req, res) => {
  const { drinks_name, description } = req.body;
  if (drinks_name && description ) {
    await DrinksIngredients.update(req.body, { where: { id: req.params.id } });
    const drink_ingredients = await DrinksIngredients.findByPk(req.params.id);
    res.send(drink_ingredients);
  }
  res.send({ message: "validation incomplete" });
})

router.patch("/:id", async (req, res) => {
  await DrinksIngredients.update(req.body, { where: { id: req.params.id } });
  const drink = await Drinks.findByPk(req.params.id);
  res.send(drink);
});
router.delete("/:id", async (req, res) => {
  await DrinksIngredients.destroy({ where: { id: req.params.id } });
  res.send("success");
});

module.exports = router;
 */