const express = require("express");
const sessionController = require("../controllers/sessionController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, sessionController.getAllSessions);
router.post("/", authMiddleware, sessionController.createSession);

router.get("/weekly", authMiddleware, sessionController.getWeekly);

router.get(
  "/planned/available",
  authMiddleware,
  sessionController.getAvailablePlannedSessions
);

router.patch("/:id/join", authMiddleware, sessionController.joinSession);
router.patch("/:id/leave", authMiddleware, sessionController.leaveSession);

router.get("/:id", authMiddleware, sessionController.getSessionById);

module.exports = router;
