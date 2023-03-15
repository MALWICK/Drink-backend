const express = require("express");
const uuid = require("uuid");
const { op } = require("sequelize");
const User = require("../database/users");
const router = express.Router();

const { SALT_ROUNDS } = require("../auth/constants");
const { authMiddleware } = require("../auth/auth");

const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", async function (req, res) {
  const user = await User.findAll();
  res.send(user);
});

router.post("/", authMiddleware, async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  bcrypt.hash(password, SALT_ROUNDS, async function (err, hash) {
    const user = await User.create({
      firstName,
      lastName,
      emailAddress,
      phone,
      password: hash,
      apiKey: uuid.v4(),
    });
    res.send(user);
  });
});

router.put("/:id", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  const user = await User.update(
    {
      firstName,
      lastName,
      emailAddress,
      phone,
      password,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(user);
});

router.patch("/:id", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  const user = await User.update(
    {
      firstName,
      lastName,
      emailAddress,
      phone,
      password,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(user);
});

router.delete("/:id", async function (req, res) {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("status: success");
});

module.exports = router;
