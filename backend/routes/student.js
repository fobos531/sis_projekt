const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student");
const student = require("../models/student");

router.post("/encryption/plain", studentController.addPlain);
router.post("/encryption/encrypted", studentController.addEncrypted);
router.get("/encryption", studentController.getAllEncryption);

router.get("/injection/safe", studentController.getAllInjectionSafe);
router.get("/injection/unsafe", studentController.getAllInjectionUnsafe);

router.post("/user_interface/validation/:enforced", studentController.userInterfaceValidation);
router.get("/user_interface/validation/", studentController.getStudentsValidation);

module.exports = router;
