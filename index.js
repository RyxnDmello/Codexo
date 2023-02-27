const database = require(__dirname + "/database/ProfileManager.js");

const express = require("express");
const bodyParser = require("body-parser");

const editors = require("./json/editors.json");
const coding = require("./json/coding.json");

const app = express();

app.use(bodyParser.urlencoded({ extended: "true" }));

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./css"));

app.set("view engine", "ejs");

const PORT = 1000;

app.get("/", (req, res) => {});

app.get("/learn/editors/:type", (req, res) => {
  if (req.params.type === "heavy") {
    res.render("editors", {
      type: editors.heavy.type,
      title: editors.heavy.title,
      image: editors.heavy.image,
      description: editors.heavy.description,
      collectionTitle: editors.heavy.collectionTitle,
      collection: editors.heavy.collection,
      featuresTitle: editors.heavy.featuresTitle,
      featuresRows: editors.heavy.featuresRows,
    });
  } else if (req.params.type === "light") {
    res.render("editors", {
      type: editors.light.type,
      title: editors.light.title,
      image: editors.light.image,
      description: editors.light.description,
      collectionTitle: editors.light.collectionTitle,
      collection: editors.light.collection,
      featuresTitle: editors.light.featuresTitle,
      featuresRows: editors.light.featuresRows,
    });
  }
});

app.get("/learn/coding/languages", (req, res) => {
  res.render("languages", {
    image: coding.languages.image,
    title: coding.languages.title,
    description: coding.languages.description,
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
