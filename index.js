const editors = require("./json/editors.json");
const features = require("./json/features.json");

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
  res.render("editors", {
    type: editors.heavy.type,
    title: editors.heavy.title,
    image: editors.heavy.image,
    description: editors.heavy.description,
    description: editors.heavy.description,
    collectionTitle: editors.heavy.collectionTitle,
    collection: editors.heavy.collection,

    featuresTitle: features.heavy.featuresTitle,
    features: features.heavy,
  });
});

app.get("/learn/editors/light", (req, res) => {
  res.render("editors", { editors: editors.heavy });
});

app.listen(PORT, () => {
  console.log(`ACTIVE | PORT: ${PORT}`);
});
