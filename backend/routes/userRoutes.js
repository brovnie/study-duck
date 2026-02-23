const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const uploadController = require("../controllers/uploadController");
const authMiddleware = require("../middleware/authMiddleware");
const sessionController = require("../controllers/sessionController");

const router = express.Router();

router.get("/", authMiddleware, userController.getAllUsers);
router.get("/me", authMiddleware, userController.getCurrentUser);

router.get("/:id/points", authMiddleware, userController.getUserPoints);
router.get("/:id/level", authMiddleware, userController.getUserLevel);
router.get(
  "/:id/sessions/count",
  authMiddleware,
  sessionController.getCountSessions
);

router.get(
  "/:id/sessions/studytime",
  authMiddleware,
  sessionController.getStudyTime
);
router.get("/:id/friends", authMiddleware, userController.getFriends);
router.get(
  "/:id/friends/count",
  authMiddleware,
  userController.getFriendsCount
);

router.get("/:id", authMiddleware, userController.getUserById);

router.post("/signup", authController.signup);
router.post("/avatar-signature", uploadController.avatarSignature);
router.patch("/signup/profile", authController.singUpProfile);

router.post("/signin", authController.signIn);

router.post("/logout", authController.logout);

module.exports = router;
