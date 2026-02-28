const serverClient = require("../config/stream");

exports.generateStreamToken = async (req, res) => {
  const { id } = req.params;
  const token = serverClient.generateUserToken({
    user_id: id,
  });

  if (!token) {
    return res.status(400).json({
      status: "error",
      message: "Failed to generate token",
    });
  }
  res.status(201).json({
    status: "success",
    token,
  });
};
