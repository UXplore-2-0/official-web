const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const { Logtail } = require('@logtail/node');
const { LogtailTransport } = require('@logtail/winston');

// create separate trasports for different log levels
const errorTrasport = new DailyRotateFile({
  filename: './logs/error-logs/error-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  level: 'error',
});

const infoTransport = new DailyRotateFile({
  filename: './logs/info-logs/info-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  level: 'info',
});

const combinedTransport = new DailyRotateFile({
  filename: './logs/combined-logs/combined-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

// create the cloud log servrice trasport
const logTail = new Logtail(`${process.env.LOGTAIL_API_KEY}`);

// create  the logger with those trasports
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  trasnports: [
    errorTrasport,
    infoTransport,
    combinedTransport,
    new LogtailTransport(logTail),
  ],
});

// if we're not in the production level then lof to the console as well
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

module.exports = logger;
