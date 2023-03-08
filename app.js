const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const drinksRouter = require("./routes/drinks");
/* const drinksIngredientRouter = require("./routes/drink_ingredients"); */
const ingredientsRouter = require("./routes/ingredients");
const glassesRouter = require("./routes/glasses");
const categoriesRouter =  require("./routes/categories");
/* const drinksGlassesRouter = require("./routes/drinks_glasses");
 *//* const drinksCategory = require("./routes/drinks_categories"); */

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/drinks", drinksRouter);
/* app.use("/drinks_ingredients", drinksIngredientRouter); */
app.use("/ingredients", ingredientsRouter);
app.use("/glasses", glassesRouter);
app.use("/categories", categoriesRouter);
/* app.use("/drinks_glasses", drinksGlassesRouter); */
/* app.use("/drinks_categories", drinksCategoriesRouter); */

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
