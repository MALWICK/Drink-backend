const {Sequelize} = require('sequelize');

const sequelize = new Sequelize("drink_db","root", undefined, {
    host : "localhost",
    dialect: "mysql",
})

module.exports = sequelize;