const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send("Access denied, no token");
    }

    // Remove "Bearer "
    const token = authHeader.split(" ")[1];

    const verified = jwt.verify(token, "secret");
    req.user = verified;

    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};