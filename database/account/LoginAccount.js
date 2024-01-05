const accountModel = require("../models/AccountModel.js");
const bcrypt = require("bcrypt");

module.exports.DatabaseLoginAccount = async (credentials) => {
  if (credentials.password !== credentials.retypePassword) return false;

  const databaseAccount = await accountModel.findOne({
    email: credentials.email,
  });

  if (databaseAccount === null) return false;

  const isPasswordValid = await bcrypt.compare(
    credentials.password,
    databaseAccount.password
  );

  return isPasswordValid;
};
