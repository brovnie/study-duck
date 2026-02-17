const e = require("express");
const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user"],
  },
  type: {
    type: String,
    enum: ["one-on-one", "group"],
    required: [true, "Please provide a type"],
  },
  status: {
    type: String,
    enum: ["planned", "active", "completed", "deleted"],
    required: [true, "Please provide a status"],
    default: "planned",
  },
  duration: {
    type: Number,
    enum: [25, 30, 45, 60, 90],
    required: [true, "Please provide a duration"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  participants: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide a user"],
      },
    ],
    validate: {
      validator: function (s) {
        if (this.type === "one-on-one") {
          return s.length > 0 && s.length <= 2;
        }
        if (this.type === "group") {
          return s.length > 0 && s.length <= 5;
        }
        return false;
      },
      message: "Invalid number of participants for session type",
    },
  },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
