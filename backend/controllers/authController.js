const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

exports.signup = async (req, res, next) => {
  const newUser = await User.create({
    email: req.body.email,
    password: req.body.password,
  });

  const userObj = newUser.toObject();
  delete userObj.password;

  const token = signToken(newUser._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: userObj,
    },
  });
};

exports.singUpProfile = async (req, res, next) => {
  const updateUser = await User.findByIdAndUpdate(
    req.body.id,
    {
      name: req.body.name,
      school: req.body.school,
      timeZone: req.body.timezone,
      profilePic: req.body.image,
      accountCompleted: true,
    },
    { new: true }
  );
  res.status(200).json({
    status: "success",
    data: {
      user: updateUser,
    },
  });
};
