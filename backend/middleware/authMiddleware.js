const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports = async function authMiddleware(req, res, next) {
  let token;

  if (req.cookies && req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(401).json({ message: "You are not logged in" });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return res.status(401).json({ message: "User no longer exists." });
  }

  req.user = currentUser;

  next();
};
