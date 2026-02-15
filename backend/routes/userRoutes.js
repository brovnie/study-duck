const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const uploadController = require("../controllers/uploadController");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);

router.post("/signup", authController.signup);
router.patch("/signup/profile", authController.singUpProfile);
router.post("/signin", authController.signIn);
router.post("/avatar-signature", uploadController.avatarSignature);

module.exports = router;
