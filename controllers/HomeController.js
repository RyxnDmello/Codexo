const AccountManager = require("../database/AccountManager.js");
const homeData = require("../json/home.json");
const menuData = require("../json/menu.json");

var authenticated = false;

const home = (req, res) => {
  res.render("home", {
    authenticated: authenticated,
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
    const isCreated = await AccountManager.CreateAccount(credentials);
    authenticated = isCreated;
    res.redirect(isCreated ? "/" : "/register");
    return;
  }

  const isLogin = await AccountManager.LoginAccount(credentials);
  authenticated = isLogin;
  res.redirect(isLogin ? "/" : "/register");
};

module.exports = {
  home,
  menu,
  register,
  authenticate,
};
