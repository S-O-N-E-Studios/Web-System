const jwt = require('jsonwebtoken');
// const User = require('../models/User');

/**
 * Middleware to protect routes - verifies JWT token
 */
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      error: { message: 'Not authorized to access this route' }
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // TODO: Fetch user from database and attach to request
    // req.user = await User.findById(decoded.id);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: { message: 'Not authorized to access this route' }
    });
  }
};

/**
 * Middleware to authorize specific roles
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: { message: `User role '${req.user.role}' is not authorized to access this route` }
      });
    }
    next();
  };
};

module.exports = { protect, authorize };
