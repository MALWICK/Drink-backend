/* const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Drinks_ingredients = sequelize.define("Drinks_ingredients", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  description : DataTypes.TEXT,
  drinks_name: DataTypes.TEXT,
  drinks_id: DataTypes.INTEGER,
  ingredients_id: DataTypes.INTEGER,
},{
    timestamps: true,
    paranoid: true,
}
);
 
module.exports = Drinks_ingredients */