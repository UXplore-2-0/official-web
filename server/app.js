const express = require('express');
const cors = require('cors');
//const redis = require('redis');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

const corsOptions = require('./config/corsOptions');
const teamRoutes = require('./routes/teamRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
//const createAdminUserIfNotExists = require('./utils/createAdminUserIfNotExists');

const app = express();

//? Log requests with Morgan
if (process.env.NODE_ENV.trim() === 'development') {
  app.use(morgan('dev'));
}

//? Set security HTTP headers
app.use(helmet());

//? Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

//? Cors
app.use(cors(corsOptions));

//? Cookie parser, reading data from cookie into req.cookies
app.use(cookieParser());

//? Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

//? Data sanitization against NoSQL query injection
app.use(mongoSanitize()); //removes $ and . from req.body object. Mongo operators are removed

//? Data sanitization against XSS (cross site scripting)
app.use(xss()); //removes html tags from req.body object

//?Prevent Parameter Pollution
app.use(hpp()); //remove duplicate fields in query string

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//app.use(createAdminUserIfNotExists);
// ROUTES
app.use('/api/v1/teams', teamRoutes);

//Handling UNHANDLED ROUTEs
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this Server !`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
