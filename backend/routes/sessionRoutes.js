const express = require("express");
const sessionController = require("../controllers/sessionController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", sessionController.getAllSessions);

router.get("/weekly", authMiddleware, sessionController.getWeekly);

router.get("/:id", sessionController.getSessionById);

router.post("/", sessionController.createSession);

module.exports = router;
