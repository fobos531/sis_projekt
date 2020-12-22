const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student");

router.post("/encryption/plain", studentController.addPlain);
router.post("/encryption/encrypted", studentController.addEncrypted);
router.get("/encryption", studentController.getAllEncryption);

router.get("/injection/safe", studentController.getAllInjectionSafe);
router.get("/injection/unsafe", studentController.getAllInjectionUnsafe);

module.exports = router;
