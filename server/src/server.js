require('express-async-error');
const dotenv = require('dotenv');
const express = require('express');
const logger = require('./api/start/logger');
const {
  unCaughtExceptionHandler,
  unHandledPromiseRejectionHandler,
} = require('./api/start/unhandled');
const dbConnect = require('./api/start/db');
// setup the dotend file
dotenv.config({ path: '.env' });
// create a new express powered server
const app = express();

// handle uncaught exception and unhandled promise rejection
process.on('unhandledRejection', unHandledPromiseRejectionHandler);
process.on('uncaughtException', unCaughtExceptionHandler);

// handle all the routes belongs to the server
require('./api/start/routes')(app);

// connect to the database
dbConnect();

const port = process.env.PORT || 5000;
// listen on the port specified by the environment
app.listen(port, () => {
  logger.info(`NODE ENV: ${process.env.NODE_ENV}`);
  logger.info(`Server running on port ${port}`);
});
