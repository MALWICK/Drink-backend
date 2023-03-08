const express = require("express");
const Drinks_glasses = require("../database/drinks_glasses");
const router = express.Router();
router.get("/", async (req, res) => {
  const drink_glass = await Drinks_glasses.findAll();
  res.json(drink_glass);
});
router.post("/", async (req, res) => {
  const { description } = req.body;
  const drink_glass = await Drinks_glasses.create({ description });
  res.json(drink_glass);
});
router.get("/:id", async (req, res) => {
  const drink_glass = await Drinks_glasses.findByPk(req.params.id);
  res.send(drink_glass);
});

router.post("/", async (req, res) => {
  const { description } = req.body;
  const drink_glass = await Drinks_glasses.create({
    description,
  });
  res.send(drink_glass);
});
router.put("/:id", async (req, res) => {
  const {  description, } = req.body;
  if ( description) {
    await Drinks_glasses.update(req.body, { where: { id: req.params.id } });
    const drink_glass = await Drinks_glasses.findByPk(req.params.id);
    res.send(drink_glass);
  }
  res.send({ message: "validation incomplete" });
});
router.patch("/:id", async (req, res) => {
  await Drinks_glasses.update(req.body, { where: { id: req.params.id } });
  const drink_glass = await Drinks_glasses.findByPk(req.params.id);
  res.send(drink_glass);
});
router.delete("/:id", async (req, res) => {
  await Drinks_glasses.destroy({ where: { id: req.params.id } });
  res.send("success");
});

module.exports = router;
