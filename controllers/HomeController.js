const AccountManager = require("../database/AccountManager.js");
const homeData = require("../json/home.json");
const menuData = require("../json/menu.json");

const home = (req, res) => {
  res.render("home", {
    username: req.session.username,
    features: homeData.features,
    comments: homeData.comments,
    brands: homeData.brands,
    footer: homeData.footer,
  });
};

const menu = (req, res) => {
  res.render("menu", { types: menuData.types });
};

const register = (req, res) => {
  res.render("register");
};

const authenticate = async (req, res) => {
  const credentials = req.body;

  if (req.params.type === "signup") {
    const isCreated = await AccountManager.CreateAccount(credentials, req);
    res.redirect(isCreated ? "/" : "/register");
    return;
  }

  const isLogin = await AccountManager.LoginAccount(credentials, req);
  res.redirect(isLogin ? "/" : "/register");
};

module.exports = {
  home,
  menu,
  register,
  authenticate,
};
