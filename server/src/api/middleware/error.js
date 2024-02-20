function errorMiddleware(err, req, res, next) {
  // Log the exception to debug purposes

  // send the generic error message to the client
  res.status(500).send(err.message);
}

module.exports = errorMiddleware;
