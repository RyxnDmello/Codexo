const express = require("express");
const bodyParser = require("body-parser");

const database = require(__dirname + "/database/ProfileManager.js");

const editors = require("./json/editors.json");
const coding = require("./json/coding.json");
const home = require("./json/home.json");
const menu = require("./json/menu.json");

const app = express();

app.use(bodyParser.urlencoded({ extended: "true" }));

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

require("dotenv").config();

app.get("/", (req, res) => {
  res.render("home", {
    features: home.features,
    comments: home.comments,
    brands: home.brands,
    footer: home.footer,
  });
});

app.get("/menu", (req, res) => {
  res.render("menu", { types: menu.types });
});

app.get("/learn/editors/:type", (req, res) => {
  const type = req.params.type;

  if (type !== "heavy" && type !== "light") {
    res.render("/menu");
    return;
  }

  if (type === "heavy") {
    res.render("editors", {
      navbar: editors.heavy.navbar,
      introduction: editors.heavy.introduction,
      collection: editors.heavy.collection,
      features: editors.heavy.features,
      others: editors.heavy.others,
    });

    return;
  }

  if (type === "light") {
    res.render("editors", {
      navbar: editors.light.navbar,
      introduction: editors.light.introduction,
      collection: editors.light.collection,
      features: editors.light.features,
      others: editors.light.others,
    });

    return;
  }
});

app.get("/learn/coding/:type", (req, res) => {
  const type = req.params.type;

  if (type !== "languages" && type !== "frameworks") {
    res.render("/menu");
    return;
  }

  if (type === "languages") {
    res.render(type, {
      navbar: coding.languages.navbar,
      introduction: coding.languages.introduction,
      collection: coding.languages.collection,
    });

    return;
  }

  if (type === "frameworks") {
    res.render(type, {
      navbar: coding.frameworks.navbar,
      introduction: coding.frameworks.introduction,
      types: coding.frameworks.types,
    });

    return;
  }
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

app.listen(process.env.PROD_PORT, () => {
  console.log(`ACTIVE | PORT: ${process.env.PROD_PORT}`);
});
