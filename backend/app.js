const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const globalErrorHandler = require("./controllers/errorController");

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true, // if you use cookies
  })
);

app.use("/api/v1/users", userRoutes);
app.use(globalErrorHandler);
module.exports = app;
