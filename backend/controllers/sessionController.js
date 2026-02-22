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
  const { userId, type, duration, startingTime } = req.body;
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
    startingTime,
    participants: [userId],
  });

  res.status(201).json({
    status: "success",
    data: {
      user: session,
    },
  });
};

exports.getCountSessions = async (req, res) => {
  const { id } = req.params;
  const { type } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }
  let totalSessions;

  if (!type) {
    totalSessions = await Session.countDocuments({
      participants: id,
    });
  } else {
    totalSessions = await Session.countDocuments({
      participants: id,
      status: type,
    });
  }

  res.status(200).json({
    status: "success",
    type: "session count",
    total: totalSessions,
  });
};

exports.getStudyTime = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }
  const result = await Session.aggregate([
    {
      $match: {
        participants: new mongoose.Types.ObjectId(`${id}`),
        status: "completed",
      },
    },
    {
      $group: {
        _id: null,
        totalDuration: { $sum: "$duration" },
      },
    },
  ]);

  const totalDuration = result[0]?.totalDuration || 0;

  res.status(200).json({
    status: "success",
    type: "studytime",
    total: totalDuration,
  });
};

exports.getWeekly = async (req, res) => {
  const id = req.user.id;

  const today = new Date();
  const dayOfTheWeek = today.getDay();

  const monday = new Date(today);
  monday.setDate(today.getDate() - (dayOfTheWeek === 0 ? 6 : dayOfTheWeek - 1));
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  const sessionsPerDay = await Session.aggregate([
    {
      $match: {
        participants: new mongoose.Types.ObjectId(`${id}`),
        createdAt: { $gte: monday, $lte: sunday }, // filter by week
      },
    },
    {
      $group: {
        _id: { $dayOfWeek: "$createdAt" }, // 1=Sunday, 2=Monday,...7=Saturday
        count: { $sum: 1 },
      },
    },
    {
      $sort: { _id: 1 }, // optional, sort by day of week
    },
  ]);

  const fullWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const result = fullWeek.map((day) => {
    const found = sessionsPerDay.find((d) => {
      return dayNames[d._id - 1] === day;
    });
    return { day, count: found ? found.count : 0 };
  });

  res.status(200).json({
    status: "success",
    week: result,
  });
};

exports.getAvailablePlannedSessions = async (req, res) => {
  const id = req.user.id;
  const type = req.query.type;

  const sessions = await Session.find({
    status: "planned",
    type: type,
    admin: { $ne: id },
    participants: { $ne: id },
  }).populate("participants", "name logo level _id profilePic");

  res.status(200).json({
    status: "success",
    total: sessions.length,
    sessions: sessions,
  });
};
