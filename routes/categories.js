const express = require("express");
const Categories = require("../database/categories");
const router = express.Router();
router.get("/", async (req, res) => {
  const category = await Categories.findAll();
  res.join(category);
});
router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const category = await Categories.create({ name, description });
  res.join(category);
});
router.get("/:id", async (req, res) => {
  const category = await Categories.findByPk(req.params.id);
  res.send(category);
});

router.post("/", async (req, res) => {
  const { name, description } = req.body;
  const category = await Categories.create({
    name,
    description,
  });
  res.send(category);
});
router.put("/:id", async (req, res) => {
  const { name, description } = req.body;
  const category = await Categories.update(
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
  const category1 = await Categories.findByPk(req.params.id);
  res.send(category1);
});

router.patch("/:id", async function (req, res) {
  const { name, description } = req.body;
  const category = await Categories.update(
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
  const category1 = await Categories.findByPk(req.params.id);
  res.send(category1);
});

router.delete("/:id", async function (req, res) {
  const category = await Categories.destroy({ where: { id: req.params.id } });
  res.send("success");
});

module.exports = router;
