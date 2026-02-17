const express = require("express");
const sessionController = require("../controllers/sessionController");
const router = express.Router();

router.get("/", sessionController.getAllSessions);
router.get("/:id", sessionController.getSessionById);

router.post("/", sessionController.createSession);

module.exports = router;
