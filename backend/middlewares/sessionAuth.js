const sessionAuth = (req, res, next) => {
  if (!req.session.username) return res.status(401).json({ success: false });

  next();
};

module.exports = sessionAuth;
