const { Schema, model } = require("mongoose");

const accountSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
});

const accountModel = model("account", accountSchema);

module.exports = accountModel;
