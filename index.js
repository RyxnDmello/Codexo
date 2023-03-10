const database = require(__dirname + "/database/ProfileManager.js");

const express = require("express");
const bodyParser = require("body-parser");

const editors = require("./json/editors.json");
const coding = require("./json/coding.json");
const menu = require("./json/menu.json");

const app = express();

app.use(bodyParser.urlencoded({ extended: "true" }));

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

const PORT = 1000;

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/menu", (req, res) => {
  res.render("menu", { types: menu.types });
});

app.get("/learn/editors/:type", (req, res) => {
  if (req.params.type === "heavy") {
    res.render("editors", {
      navbar: editors.heavy.navbar,
      introduction: editors.heavy.introduction,
      features: editors.heavy.features,
      collection: editors.heavy.collection,
    });
  } else if (req.params.type === "light") {
    res.render("editors", {
      navbar: editors.light.navbar,
      introduction: editors.light.introduction,
      features: editors.light.features,
      collection: editors.light.collection,
    });
  }
});

app.get("/learn/coding/:type", (req, res) => {
  res.render("languages", {
    navbar: coding.languages.navbar,
    introduction: coding.languages.introduction,
    collection: coding.languages.collection,
  });
});

app.get("/account/profile/:type", (req, res) => {
  res.render("register");
});

app.post("/account/profile/:type", (req, res) => {
  const submitType = req.body.submitButton;

  if (submitType === "create") {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const retypePassword = req.body.retypePassword;

    database.CreateProfile(username, email, password, retypePassword);
  } else if (submitType === "login") {
    const email = req.body.email;
    const password = req.body.password;
    const retypePassword = req.body.retypePassword;

    database.LoginProfile(email, password, retypePassword);
  }
});

app.listen(PORT, () => {
  console.log(`ACTIVE | PORT: ${PORT}`);
});
