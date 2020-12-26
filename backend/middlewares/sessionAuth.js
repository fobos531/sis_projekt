const sessionAuth = (req, res, next) => {
  console.log(req.session.id);
  console.log(req.session.username);

  if (!req.session.username) {
    return res.status(401).json({ success: false });
  }
  next();
};

module.exports = sessionAuth;
