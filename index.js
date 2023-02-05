const heavy = require("./json/heavy.json");

const express = require("express");
const bodyParser = require("body-parser");
const { json } = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./css"));

const PORT = 1000;

app.get("/", (req, res) => {});

app.get("/learn/editors/heavy", (req, res) => {
  res.render("heavy");
});

app.listen(PORT, () => {
  console.log(`ACTIVE | PORT: ${PORT}`);
});
