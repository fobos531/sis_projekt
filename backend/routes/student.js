const express = require("express");
const csrf = require("csurf");

const router = express.Router();
const studentController = require("../controllers/student");
const csrfProtection = csrf({ cookie: true });
const auth = require("../middlewares/auth");

router.post("/encryption/plain", studentController.addPlain);
router.post("/encryption/encrypted", studentController.addEncrypted);
router.get("/encryption", studentController.getAllEncryption);

router.get("/injection/safe", studentController.getAllInjectionSafe);
router.get("/injection/unsafe", studentController.getAllInjectionUnsafe);

router.post("/user_interface/validation/:enforced", studentController.userInterfaceValidation);
router.get("/user_interface/validation/", studentController.getStudentsValidation);

router.get("/network_traffic/csrf/allStudents", studentController.getAllMySQL);
router.put("/network_traffic/csrf/:phoneNumber", studentController.editStudent);
router.put("/network_traffic/csrf/protected/:phoneNumber", csrfProtection, studentController.editStudent);

router.get("/auth/students", auth, studentController.getAllMySQL);

module.exports = router;
