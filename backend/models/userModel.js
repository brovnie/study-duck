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
    maxlength: [30, "Password must be less than 30 characters"],
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
    required: [true, "Please provide an institute"],
    trim: true,
    default: "Unknown",
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
  level: {
    type: String,
    required: [true, "Please provide a level"],
    trim: true,
    default: "Green Duck",
  },
  points: {
    type: Number,
    required: [true, "Please provide points"],
    default: 0,
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hashSync(this.password, 12);
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
