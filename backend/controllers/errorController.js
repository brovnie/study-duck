const AppError = require("../utils/appError");

//error handelers for errors from mongoose
const handleCastError = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  const field = Object.keys(err.keyValue)[0]; // e.g., "email"
  return new AppError(message, 400, field);
};

const handleDuplicateError = (err) => {
  const value = err.errmsg.match(/(["'])(.*?)\1/)[2];
  const field = Object.keys(err.keyValue)[0]; // e.g., "email"
  const message = `This ${field} already exists.`;
  return new AppError(message, 400, field);
};

const handleValidationError = (err) => {
  let message = "";
  let field = "";
  if (err.errors.password) {
    message = err.errors.password.message;
    field = "password";
  } else {
    const errors = Object.values(err.errors).map((error) => {
      field = +error.path + ",";
      return error.message;
    });
    message = `Invalid ${errors.join(", ")}.`;
  }

  return new AppError(message, 400, field);
};

const handleTokenError = (err) => {
  const message = `Invalid token`;
  return new AppError(message, 401, "invalid_token");
};

const handleExpiredTokenError = (err) => {
  const message = `Token expired`;
  return new AppError(message, 401, "token_expired");
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
    input: err.input,
  });
};

const sendErrorProd = (err, res) => {
  //operational trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      input: err.input,
    });
    // programming or other unknown error: don't leak error details to client
  } else {
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status =
    err.status ||
    (err.statusCode >= 400 && err.statusCode < 500 ? "fail" : "error");

  if (process.env.NODE_ENV === "development") {
    console.log("Environment: development");
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    console.log("Environment: production");
    let error = { ...err };
    if (err.name === "CastError") {
      error = handleCastError(err);
    }
    if (err.code === 11000) {
      error = handleDuplicateError(err);
    }
    if (err.name === "ValidationError") {
      error = handleValidationError(err);
    }
    if (err.name === "JsonWebTokenError") {
      error = handleTokenError(err);
    }
    if (err.name === "TokenExpiredError") {
      error = handleExpiredTokenError(err);
    }
    sendErrorProd(error, res);
  }
};
