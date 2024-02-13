const jwt = require('jsonwebtoken');

// function check whether teh user has authenticated or not
function auth(req, res, next) {
  const accessToken = req.header('x-auth-token');
  if (!accessToken) {
    return res.status(401).json({
      status: false,
      message: 'Access denied. No token provided!',
    });
  }

  try {
    // verify the token by decoding the token
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.user = decoded; // set the user to the request object
    next(); // move to the next middleware
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

// function to check whether the user is admin or not
function admin(req, res, next) {
  const user = req.user;

  // check whether the user is admin or not
  if (user.role !== 'admin') {
    return res.status(403).json({
      status: false,
      message: 'Forbidden!',
    });
  }

  next();
}

module.exports = {
  auth,
  admin,
};
