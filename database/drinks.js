const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Drinks = sequelize.define("Drinks", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.TEXT,
  description: DataTypes.TEXT,
  imageUrl: DataTypes.TEXT,
  recipe: DataTypes.TEXT,
  category_id: DataTypes.INTEGER,
  ingredients_id: DataTypes.INTEGER,
  glass_id: DataTypes.INTEGER,
  user_id: DataTypes.INTEGER,
  is_alcoholic: DataTypes.BOOLEAN,
  ingredients: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    timestamps: true,
    paranoid: true,
});

module.exports = Drinks;
