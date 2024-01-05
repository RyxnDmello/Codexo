const { DatabaseCreateAccount } = require("./account/CreateAccount.js");
const { DatabaseLoginAccount } = require("./account/LoginAccount.js");

module.exports.CreateAccount = async (credentials) => {
  return await DatabaseCreateAccount(credentials);
};

module.exports.LoginAccount = async (credentials) => {
  return await DatabaseLoginAccount(credentials);
};
