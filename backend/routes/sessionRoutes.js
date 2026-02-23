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

router.get("/:id", authMiddleware, sessionController.getSessionById);

module.exports = router;
