const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

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

const ProfileModel = mongoose.model("Profile", profileSchema);

const profile = new ProfileModel({
  username: "Ryan Nolasco D Mello",
  email: "ryanndmello10@gmail.com",
  password: "RyanDmello10!",
  retypePassword: "RyanDmello10!",
});

exports.DatabaseCreateProfile = () => {
  profile.save((err) => {
    if (!err) {
      console.log("Successful! Profile Created.");
      return;
    }

    console.log("Unsuccessful! Unable to create.");
  });
};
