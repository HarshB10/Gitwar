// Main File

// Includes
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// EJS Middlewares
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

// Include Routes
const indexRouter = require("./routes/index");
const profileRouter = require("./routes/profile");
const compareRouter = require("./routes/compare");
const scoreRouter = require("./routes/score");
const apiRouter = require("./routes/api");
const topRouter = require("./routes/top");
const NullRouter = require("./routes/null");

// Use Routes
app.use("/", indexRouter);
app.use("/profile", profileRouter);
app.use("/compare", compareRouter);
app.use("/score", scoreRouter);
app.use("/api", apiRouter);
app.use("/top", topRouter);
app.use("/NULL", NullRouter);

const PORT = process.env.PORT || 3000;

// Server
app.listen(PORT, () => {
  console.log(`Server is up and running at Port ${PORT}`);
});
