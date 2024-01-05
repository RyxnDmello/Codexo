require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const ConnectDatabase = require("./database/DatabaseManager.js");

const homeRouter = require("./routes/Home.js");
const LearnRouter = require("./routes/Learn.js");

app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

ConnectDatabase();

app.use("/", homeRouter);
app.use("/learn", LearnRouter);

app.listen(process.env.DEVELOPMENT_PORT || process.env.PORT, () => {
  console.log(
    `ACTIVE | PORT: ${process.env.DEVELOPMENT_PORT || process.env.PORT}`
  );
});
