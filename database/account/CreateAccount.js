const accountModel = require("../models/AccountModel.js");
const bcrypt = require("bcrypt");

module.exports.DatabaseCreateAccount = async (credentials) => {
  const databaseAccount = await accountModel.findOne({
    email: credentials.email,
  });

  if (databaseAccount !== null) return false;

  const encryptedPassword = await bcrypt.hash(credentials.password, 10);

  const account = new accountModel({
    username: credentials.username,
    email: credentials.email,
    password: encryptedPassword,
  });

  const createdAccount = await account.save();

  if (createdAccount === null) return false;
  return true;
};
