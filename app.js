require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const memoryStore = require("memorystore")(session);

const app = express();

const ConnectDatabase = require("./database/DatabaseManager.js");

const homeRouter = require("./routes/Home.js");
const LearnRouter = require("./routes/Learn.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("./JavaScript"));
app.use(express.static("./images"));
app.use(express.static("./fonts"));
app.use(express.static("./css"));

app.use(
  session({
    secret: "Codexo",
    cookie: {
      secure: false,
      maxAge: 86400000,
    },
    store: new memoryStore({
      checkPeriod: 86400000,
    }),
    saveUninitialized: false,
    resave: false,
  })
);

app.set("view engine", "ejs");

ConnectDatabase();

app.use("/", homeRouter);
app.use("/learn", LearnRouter);

app.listen(process.env.DEVELOPMENT_PORT || process.env.PORT, () => {
  console.log(
    `ACTIVE | PORT: ${process.env.DEVELOPMENT_PORT || process.env.PORT}`
  );
});
