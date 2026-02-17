const mongoose = require("mongoose");
const Session = require("../models/sessionModel");

exports.getAllSessions = async (req, res) => {
  const sessions = await Session.find();

  res.status(200).json({
    status: "success",
    total: sessions.length,
    sessions: sessions,
  });
};

exports.getSessionById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }

  const session = await Session.findById(id);

  if (!session) {
    return res.status(404).json({
      status: "error",
      message: "Session not found",
    });
  }

  res.status(200).json({
    status: "success",
    session: session,
  });
};

exports.createSession = async (req, res) => {
  const { userId, type, duration } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }

  const session = await Session.create({
    admin: userId,
    type,
    duration,
    participants: [userId],
  });

  res.status(201).json({
    status: "success",
    data: {
      user: session,
    },
  });
};
