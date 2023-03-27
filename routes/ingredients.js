const express = require("express");
const Ingredients = require("../database/ingredients");
const router = express.Router();

router.get("/", async (req, res) => {
  const ingredients = await Ingredients.findAll();
  res.join(ingredients);
});
router.post("/", async (req, res) => {
  const ingredients = await Ingredients.create(req.body);
  res.join(ingredients);
});
router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const ingredients = await Ingredients.create({
    name,
    description,
  });
  res.send(ingredients);
});
router.put("/:id", async (req, res) => {
  const { name, description } = req.body;
  const ingredients = await Ingredients.update(
    {
      name,
      description,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  const ingredient = await Ingredients.findByPk(req.params.id);
  res.send(ingredient);
});
router.patch("/:id", async (req, res) => {
  const { name, description } = req.body;
  const ingredients = await Ingredients.update(
    {
      name,
      description,
    },
    {
      where: { id: req.params.id },
    }
  );
  const ingredient = await Ingredients.findByPk(req.params.id);
  res.send(ingredient);
});
router.delete("/:id", async (req, res) => {
  const ingredients = await Ingredients.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("success");
});

module.exports = router;
