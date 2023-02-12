const mongoose = require("mongoose").set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://WebApp-Personal-02:WebApp02@profile-information-dev.naxa2du.mongodb.net/profilesDB"
);

const profileSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
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

exports.CreateProfile = (username, email, password, retypePassword) => {
  profileModel.find({}, (error, profiles) => {
    if (error) {
      console.log(error);
      return;
    }

    let emailExists = false;

    const lastID = profiles.length;

    profiles.forEach((profile) => {
      if (profile.email === email) {
        emailExists = true;
      }
    });

    if (emailExists) {
      console.log("\nError Type: Profile Already Exists!\n");
      return;
    }

    if (password !== retypePassword) {
      console.log("\nError Type: Password Mismatch!\n");
      return;
    }

    DatabaseCreateProfile(lastID, username, email, password, retypePassword);
  });
};

exports.LoginProfile = (email, password, retypePassword) => {
  profileModel.find({}, (error, profiles) => {
    if (error) {
      console.log(error);
      return;
    }

    let emailExists = false;

    profiles.forEach((profile) => {
      if (profile.email === email) {
        emailExists = true;
        return;
      }
    });

    if (!emailExists) {
      console.log("\nError Type: Profile Does Not Exist!\n");
      return;
    }

    if (password !== retypePassword) {
      console.log("\nError Type: Password Mismatch\n");
      return;
    }

    console.log("\nSuccessfully Logged In!\n");
  });
};

function DatabaseCreateProfile(id, username, email, password, retypePassword) {
  const profile = new profileModel({
    _id: id + 1,
    username: username,
    email: email,
    password: password,
    retypePassword: retypePassword,
  });

  profile.save((err) => {
    if (err) {
      console.log("\nError Type: Database Unsuccessful!\n");
      return;
    }

    console.log("\nSuccess! Profile Added.\n");
  });
}
