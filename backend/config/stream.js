require("dotenv").config();
const { StreamClient } = require("@stream-io/node-sdk");

const serverClient = new StreamClient(
  process.env.STREAM_API_KEY,
  process.env.STREAM_SECRET
);
module.exports = serverClient;
