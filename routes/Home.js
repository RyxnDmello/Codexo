const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/HomeController.js");

router.get("/", HomeController.home);
router.get("/menu", HomeController.menu);

router.get("/register", HomeController.register);
router.post("/register/:type", HomeController.authenticate);

module.exports = router;