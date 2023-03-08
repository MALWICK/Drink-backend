/* const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Drinks_glasses = sequelize.define('Drinks_glasses', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      description : DataTypes.TEXT,
      drinks_id: DataTypes.INTEGER,
      glasses_id: DataTypes.INTEGER
},{
    timestamps: true,
    paranoid: true,
});

module.exports = Drinks_glasses; */