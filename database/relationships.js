const sequelize = require(".");
const Drinks = require("./drinks");
const Users = require("./users");
const Ingredients = require("./ingredients");
const Glasses = require("./glasses");
const Categories = require("./categories");

function relate() {
  sequelize.sync();

  Users.hasMany(Drinks);
  Drinks.belongsTo(Users);

  Drinks.belongsToMany(Categories, { through: "drinks_categories" });
  Categories.belongsToMany(Drinks, { through: "drinks_categories" })

  Drinks.belongsToMany(Ingredients, { through: "drinks_ingredients" });
  Ingredients.belongsToMany(Drinks, { through: "drinks_ingredients" })

  Drinks.belongsToMany(Glasses, { through: "drinks_glasses" });
  Glasses.belongsToMany(Drinks, { through: "drinks_glasses" })

  sequelize.sync();
}

module.exports = relate;
