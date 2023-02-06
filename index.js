const editors = require("./json/editors.json");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

const PORT = 1000;

app.get("/", (req, res) => {});

app.get("/learn/editors/heavy", (req, res) => {
  res.render("editors", { editors: editors.heavy });
});

app.get("/learn/editors/light", (req, res) => {
  res.render("editors", { editors: editors.heavy });
});

app.listen(PORT, () => {
  console.log(`ACTIVE | PORT: ${PORT}`);
});
