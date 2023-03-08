/* const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Drinks_categories = sequelize.define("Drinks_categories", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      drinks_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,

},{
    timestamps: true,
    paranoid: true,
})
module.exports = Drinks_categories; */