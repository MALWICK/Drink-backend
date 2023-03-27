const express = require("express");
const User = require("../database/users");
const router = express.Router();
const uuid = require("uuid");

const { SALT_ROUNDS } = require("../auth/constants");
/* const { authMiddleware } = require("../auth/auth"); */
/* 
console.log(`Here is a test v1 uuid: ${uuid.v4()}`); */


const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", async function (req, res) {
  const user = await User.findAll();
  res.send(user);
});

router.post("/", async function (req, res) {
  const { firstName, lastName, emailAddress, phone, password } = req.body;
  bcrypt.hash(password, 5, async function (err, hash) {
    const user = await User.create({
      firstName,
      lastName,
      emailAddress,
      phone,
      apikey: uuid.v4(), 
      password: hash,
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
  const user1 = await User.findByPk(req.params.id);
  res.send(user1);
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
  const user1 = await User.findByPk(req.params.id);
  res.send(user1);
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
