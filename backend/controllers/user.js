const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin123") {
    const token = jwt.sign(
      {
        username,
        password,
      },
      process.env.JWT_SECRET
    );

    res.cookie("Authorization", `Bearer ${token}`, { httpOnly: true, sameSite: "strict", maxAge: 600000 });

    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
};
