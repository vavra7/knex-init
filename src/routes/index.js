const express = require("express");
const testController = require("../controllers/testController");

const router = express.Router();

router.get("/test", testController.test);

module.exports = router;
