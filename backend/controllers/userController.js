const User = require("../models/userModel");
const Session = require("../models/sessionModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    total: users.length,
    users: users,
  });
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  res.status(200).json({
    status: "success",
    user: user,
  });
};

// controllers/userController.js

exports.getCurrentUser = async (req, res) => {
  try {
    // read the token from the cookie
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ status: "fail", message: "Not logged in" });
    }

    // verify the JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // check that decoded.id exists and is a valid MongoDB ObjectId
    if (!decoded?.id || !mongoose.isValidObjectId(decoded.id)) {
      return res
        .status(401)
        .json({ status: "fail", message: "Invalid token ID" });
    }

    // find the user by ID
    const user = await User.findById(decoded.id);
    if (!user) {
      return res
        .status(401)
        .json({ status: "fail", message: "User not found" });
    }
    // return the user
    return res.status(200).json({
      status: "success",
      data: {
        id: user._id,
        name: user.name,
        profilePic: user.profilePic,
        institute: user.institute,
        timeZone: user.timeZone,
      },
    });
  } catch (err) {
    console.error(err);
    return res
      .status(401)
      .json({ status: "fail", message: "Token invalid or expired" });
  }
};

exports.getUserPoints = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  res.status(200).json({
    status: "success",
    points: user.points,
  });
};

exports.getUserLevel = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }

  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  res.status(200).json({
    status: "success",
    level: user.level,
  });
};

exports.getUserSessionsCount = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }
  const totalSessions = await Session.countDocuments({
    participants: id,
    status: "completed",
  });

  res.status(200).json({
    status: "success",
    type: "session count",
    total: totalSessions,
  });
};

exports.getUserSessionsStudyTime = async (req, res) => {
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

exports.getUserSessionsWeekly = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }

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

exports.getFriends = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }
  const friends = await User.findById(id).select("friends");

  if (!friends) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  res.status(200).json({
    status: "success",
    friends: friends.friends,
  });
};

exports.getFriendsCount = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: "error",
      message: "Invalid ID format",
    });
  }
  const friends = await User.findById(id).select("friends");

  if (!friends) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  res.status(200).json({
    status: "success",
    type: "friends",
    total: friends.friends.length,
  });
};
