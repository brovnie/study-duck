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
  try {
    // read the token from the cookie
    const token = req.cookies?.jwt;
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
      token: token,
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
