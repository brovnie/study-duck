const User = require("../models/userModel");
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

exports.getCurrentUser = async (req, res) => {
  const user = req.user;
  const token = req.cookies.jwt;

  return res.status(200).json({
    status: "success",
    data: {
      id: user._id,
      name: user.name,
      profilePic: user.profilePic,
      institute: user.institute,
      timeZone: user.timeZone,
    },
    token: token,
  });
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
  const id = req.user.id;

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
