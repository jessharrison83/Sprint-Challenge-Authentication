const jwt = require("jsonwebtoken");

const jwtKey =
  process.env.JWT_SECRET ||
  "add a .env file to root of project with the JWT_SECRET variable";

// quickly see what this file exports
module.exports = {
  authenticate,
  generateToken
};

// implementation details
function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on the Authorization Header"
    });
  }
}

function generateToken(user) {
  const payload = {
    username: user.username
  };
  const options = {
    expiresIn: "1h",
    jwtid: "12345"
  };
  return jwt.sign(payload, jwtKey, options);
}
