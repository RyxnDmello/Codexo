require("dotenv").config();

const mongoose = require("mongoose");

const ConnectDatabase = async () => {
  mongoose.set("strictQuery", true);

  await mongoose.connect(
    `${process.env.DATABASE_URI}/${process.env.DATABASE}`,
    {
      retryWrites: true,
      retryReads: true,
    }
  );
};

module.exports = ConnectDatabase;
