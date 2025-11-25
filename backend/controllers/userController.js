const User = require("../models/userModel");
const mongoose = require("mongoose");
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
