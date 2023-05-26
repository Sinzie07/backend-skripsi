const express = require("express");

const router = express.Router();

const resultControllers = require("../controllers/result_controllers");

router.route("/").post(resultControllers.createResult);

module.exports = router;
