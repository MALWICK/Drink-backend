const { DataTypes } = require("sequelize");
const sequelize = require(".");
const User = sequelize.define(
  "users",
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: DataTypes.STRING,
    apiKey: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: true,
    paraniod: true,
  }
);

module.exports = User;
