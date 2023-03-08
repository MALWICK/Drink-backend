const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Drinks_categories = sequelize.define("Drinks_categories", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
})
module.exports = Drinks_categories;