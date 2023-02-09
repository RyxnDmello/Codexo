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
});

app.get("/learn/editors/light", (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`ACTIVE | PORT: ${PORT}`);
});
