const express = require("express");
const router = express.Router();
const student = require("./student");
const user = require("./user");

router.use("/student", student);
router.use("/user", user);

module.exports = router;
