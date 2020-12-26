const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  if (!req.cookies?.Authorization) return res.status(400).json({ success: false, message: "No token privided!" });

  const token = req.cookies.Authorization.split(" ")[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({ succes: false, message: "Invalid  token" });
  }
};

module.exports = auth;
