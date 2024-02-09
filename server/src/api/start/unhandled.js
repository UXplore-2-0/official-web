const { logger } = require('./logger');

// this function is called when an error is not caught
function unCaughtExceptionHandler(err) {
  logger.error('Uncaught Error: Shutting Down!!!');
  logger.error(err.name, err.message);

  // if we're in production then we should exit the process
  process.exit(1);
}

// this function is called when a promise is rejected and there is no catch block
function unHandledPromiseRejectionHandler(err) {
  logger.error('Unhandled Promise Rejection: Shutting Down!!!');
  logger.erro(err.name, err.message);
  logger.erro(err.stack);
  // if we're in production then we should exit the process
  process.exit(1);
}

module.exports = {
  unCaughtExceptionHandler,
  unHandledPromiseRejectionHandler,
};
