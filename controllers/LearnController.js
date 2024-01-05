const editorsData = require("../json/editors.json");
const codingData = require("../json/coding.json");

const editors = (req, res) => {
  const type = req.params.type;

  if (type !== "heavy" && type !== "light") {
    res.render("/menu");
    return;
  }

  if (type === "heavy") {
    res.render("editors", {
      navbar: editorsData.heavy.navbar,
      introduction: editorsData.heavy.introduction,
      collection: editorsData.heavy.collection,
      features: editorsData.heavy.features,
      others: editorsData.heavy.others,
    });

    return;
  }

  if (type === "light") {
    res.render("editors", {
      navbar: editorsData.light.navbar,
      introduction: editorsData.light.introduction,
      collection: editorsData.light.collection,
      features: editorsData.light.features,
      others: editorsData.light.others,
    });

    return;
  }
};

const coding = (req, res) => {
  const type = req.params.type;

  if (type !== "languages" && type !== "frameworks") {
    res.render("/menu");
    return;
  }

  if (type === "languages") {
    res.render(type, {
      navbar: codingData.languages.navbar,
      introduction: codingData.languages.introduction,
      collection: codingData.languages.collection,
    });

    return;
  }

  if (type === "frameworks") {
    res.render(type, {
      navbar: codingData.frameworks.navbar,
      introduction: codingData.frameworks.introduction,
      types: codingData.frameworks.types,
    });

    return;
  }
};

module.exports = {
  editors,
  coding,
};
