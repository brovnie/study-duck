const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const ms = require("ms");

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

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(Date.now() + ms(process.env.JWT_EXPIRES_IN)),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);
  //Remove password from the output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Email or password is missing", 400));
  }

  const user = await User.findOne({ email: email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Invalid email or password", 401));
  }

  createSendToken(user, 200, res);
};
