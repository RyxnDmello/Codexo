const express = require("express");
const router = express.Router();

const LearnController = require("../controllers/LearnController.js");

router.get("/editors/:type", LearnController.editors);
router.get("/coding/:type", LearnController.coding);

module.exports = router;