var express = require('express');
const {op} = require('sequelize')
const User = require('../database/users')
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res) {
  const users = await User.findAll()
  res.send('users');
});

module.exports = router;
