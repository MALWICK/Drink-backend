const express = require("express");
const Drinks = require("../database/drinks");
const router = express.Router();
router.get("/", async (req, res) => {
    const drink = await Drinks.findAll();
    res.json(drink);
  });
router.post("/", async (req, res) => {
  const { name, description, imageUrl, recipe } = req.body;
  const drink = await Drinks.create({ name, description, imageUrl, recipe });
  res.json(drink);
});
router.get("/:id", async (req, res) => {
  const drinks = await Drinks.findByPk(req.params.id);
  res.send(drinks);
});

router.post("/", async (req, res) => {
  const { name, description, imageUrl, recipe, userid } = req.body;
  const drink = await Drinks.create({
    name,
    description,
    imageUrl,
    recipe,
    userid,
  });
  res.send(drink);
});router.put("/:id", async function (req, res) {
  const { name, description, imageUrl, recipe } = req.body;
  const drink = await Drinks.update(
    {
      name,
      description,
      imageUrl,
      recipe,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(drink);
});
router.patch("/:id", async (req, res) => {
  await Drinks.update(req.body, { where: { id: req.params.id } });
  const drink = await Drinks.findByPk(req.params.id);
  res.send(drink);
});
router.delete("/:id", async (req, res) => {
  await Drinks.destroy({ where: { id: req.params.id } });
  res.send("success");
});

module.exports = router;
