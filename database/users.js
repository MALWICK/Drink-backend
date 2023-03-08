const { DataTypes } = require('sequelize');
const sequelize = require('.');
const User = sequelize.define('user', {
  firstName: DataTypes.TEXT,
  lastName: DataTypes.TEXT,
  emailAddress: {
    type:DataTypes.TEXT,
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







