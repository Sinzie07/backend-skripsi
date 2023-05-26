const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/user_controllers");

router.route("/").post(userControllers.createUser);

module.exports = router;
