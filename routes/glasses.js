const express = require("express");
const Glasses = require("../database/glasses");
const router = express.Router();

router.get("/", async (req, res) => {
  const glass = await Glasses.findAll();
  res.join(glass);
});
router.post("/", async (req, res) => {
  const glass = await Glasses.create(req.body);
  res.join(glass);
});
router.post("/", async (req, res) => {
  const { name } = req.body;
  const glass = await Glasses.create({
    name,
  });
  res.send(glass);
});
router.put("/:id", async (req, res) => {
  const { name } = req.body;
  const glass = await Glasses.update(
    {
      name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  const glass1 = await Glasses.findByPk(req.params.id);
  res.send(glass1);
});

router.patch("/:id", async (req, res) => {
  const { name } = req.body;
  const glass = await Glasses.update(
    {
      name,
    },
    {
      where: { id: req.params.id },
    }
  );
  const glass1 = await Glasses.findByPk(req.params.id);
  res.send(glass1);
});
router.delete("/:id", async (req, res) => {
  const glass = await Glasses.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("success");
});

module.exports = router;
