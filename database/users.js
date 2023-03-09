const { DataTypes } = require('sequelize');
const sequelize = require('.');
const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  emailAddress: {
    type:DataTypes.STRING,
    unique: true
  },
  phone:DataTypes.TEXT,
  apikey:DataTypes.TEXT,
  password:DataTypes.STRING,
  is_admin:DataTypes.BOOLEAN
},{
  timestamps: true,
  paranoid: true
});
module.exports = User;







