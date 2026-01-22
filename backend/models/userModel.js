const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email address"],
    select: false,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [8, "Password must be at least 8 characters"],
    maxlength: [128, "Password must be less than 128 characters"],
    select: false,
  },
  name: {
    type: String,
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [128, "Name must be less than 128 characters"],
    required: [true, "Please provide a name"],
    trim: true,
    default: "Unknown",
  },
  profilePic: {
    type: String,
  },
  institute: {
    type: String,
  },
  timeZone: {
    type: String,
    required: [true, "Please provide a time zone"],
    trim: true,
    default: "UTC",
  },
  accountCompleted: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hashSync(this.password, 12);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
