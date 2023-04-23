const { response } = require("express");

const mongoose = require("mongoose").set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://WebApp-Personal-02:WebApp02@profile-information-dev.naxa2du.mongodb.net/profilesDB"
);

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  retypePassword: {
    type: String,
    required: true,
  },
});

const profileModel = mongoose.model("profile", profileSchema);

exports.CreateProfile = (
  username,
  email,
  password,
  retypePassword,
  response
) => {
  profileModel
    .findOne({ email: email })
    .then((profile) => {
      if (
        profile.password !== password ||
        profile.password !== retypePassword
      ) {
        console.log("INVALID PASSWORD OR PASSWORD MISMATCH\n");
        response.redirect("/");
        return;
      }

      console.log("ACCOUNT ALREADY EXISTS\n");
      response.redirect("/menu");
    })
    .catch(() => {
      DatabaseCreateProfile(
        username,
        email,
        password,
        retypePassword,
        response
      );
    });
};

exports.LoginProfile = (email, password, retypePassword, response) => {
  profileModel
    .findOne({ email: email })
    .then((profile) => {
      if (
        profile.password !== password ||
        profile.password !== retypePassword
      ) {
        console.log("INVALID PASSWORD OR PASSWORD MISMATCH\n");
        response.redirect("/account/profile/signup");
        return;
      }

      response.redirect("/menu");
    })
    .catch(() => {
      response.redirect("/account/profile/signup");
    });
};

function DatabaseCreateProfile(
  username,
  email,
  password,
  retypePassword,
  response
) {
  const profile = new profileModel({
    username: username,
    email: email,
    password: password,
    retypePassword: retypePassword,
  });

  profile.save((err) => {
    if (err) {
      console.log("\nERROR: DATABASE ERROR DETECTED!\n");
      return;
    }

    console.log("\nACCOUNT SUCCESSFULLY CREATED!\n");
    response.redirect("/menu");
  });
}
