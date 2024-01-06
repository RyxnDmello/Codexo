const { DatabaseCreateAccount } = require("./account/CreateAccount.js");
const { DatabaseLoginAccount } = require("./account/LoginAccount.js");

module.exports.CreateAccount = async (credentials, request) => {
  return await DatabaseCreateAccount(credentials, request);
};

module.exports.LoginAccount = async (credentials, request) => {
  return await DatabaseLoginAccount(credentials, request);
};
