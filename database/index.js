const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("drinksdb", "kesh21", "B5A0T2A8&Chris", {
    host : "db4free.net",
    dialect: "mysql",
  });

module.exports = sequelize;