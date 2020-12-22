const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student");

router.post("/plain", studentController.addPlain);
router.post("/encrypted", studentController.addEncrypted);

router.get("/", studentController.getAll);

module.exports = router;
