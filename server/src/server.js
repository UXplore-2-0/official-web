
const express = require('express');
// const logger = require('./api/start/logger');
// const {
//   unCaughtExceptionHandler,
//   unHandledPromiseRejectionHandler,
// } = require('./api/start/unhandled');
const db = require('./api/models');
// setup the dotend file
// dotenv.config({ path: '.env' });
// create a new express powered server
const app = express();

// handle uncaught exception and unhandled promise rejection
// process.on('unhandledRejection', unHandledPromiseRejectionHandler);
// process.on('uncaughtException', unCaughtExceptionHandler);

// handle all the routes belongs to the server
require('./api/start/routes')(app);

const port = process.env.PORT || 6000;

// start the server by checking the existence of the database
db.sequelize.sync({logging: false }).then(() => {
  // listen on the port specified by the environment
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // logger.info(`NODE ENV: ${process.env.NODE_ENV}`);
    // logger.info(`Server running on port ${port}`);
  });

});


