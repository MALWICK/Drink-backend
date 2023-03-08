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
  const { description } = req.body;
  const glass = await Glasses.create({
    description,
  });
  res.send(glass);
});
router.put("/:id", async (req, res) => {
  const { description } = req.body;
  const glass = await Glasses.update(
    {
      description,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(glass);
});

router.patch("/:id", async (req, res) => {
  const { description } = req.body;
  const glass = await Glasses.update(
    {
      description,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.send(glass);
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
