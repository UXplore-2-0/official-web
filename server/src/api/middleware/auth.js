function auth(req, res, next) {
  next();
}

function admin(req, res, next) {
  next();
}

module.exports = {
  auth,
  admin,
};
