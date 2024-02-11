const helmet = require('helmet');
const hpp = require('hpp');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const errorMiddleware = require('../middleware/error');

const authRoutes = require('../routes/auth.routes');
const teamsRoutes = require('../routes/teams.routes');
const statRoutes = require('../routes/stat.routes');
const notificationRoutes = require('../routes/notification.routes');

module.exports = (app) => {
  // log the requesta with morgan in the dev mode
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(helmet()); // set the secure HTTP hedares
  app.use(hpp()); // prevent http parameter pollution
  app.use(cors()); // enable CORS for all requests

  // set the body parser and reading data from url encoded data
  app.use(express.json({ limit: '10kb' }));
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));

  // data sanitization againts NO SQL query injection
  app.use(mongoSanitize());
  // data sanitization againts XSS
  //   app.use(xss());

  // handle all the routes belongs to the API
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/teams', teamsRoutes);
  app.use('/api/v1/stat', statRoutes);
  app.use('/api/v1/notifications', notificationRoutes);

  // handle all the routes except for above routes
  app.all('*', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server!`);
    err.status = 'fail';
    err.statusCode = 404;

    next(err);
  });

  app.use(errorMiddleware);

  app.use(helmet());
};
