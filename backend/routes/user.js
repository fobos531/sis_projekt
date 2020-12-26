const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.post("/auth/login-jwt", userController.login);

router.post("/auth/login-session", userController.loginSession);

module.exports = router;
