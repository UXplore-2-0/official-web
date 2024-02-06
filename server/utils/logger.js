// const { createLogger, format } = require('winston');

// const DailyRotateFile = require('winston-daily-rotate-file');

// // Create separate transports for different log levels
// const errorTransport = new DailyRotateFile({
//   filename: './logs/error-logs/error-%DATE%.log',
//   datePattern: 'YYYY-MM-DD',
//   zippedArchive: true,
//   maxSize: '20m',
//   maxFiles: '14d',
//   level: 'error',
// });

// const infoTransport = new DailyRotateFile({
//   filename: './logs/info-logs/info-%DATE%.log',
//   datePattern: 'YYYY-MM-DD',
//   zippedArchive: true,
//   maxSize: '20m',
//   maxFiles: '14d',
//   level: 'info',
// });

// // Create a combined transport for all log levels
// const combinedTransport = new DailyRotateFile({
//   filename: './logs/combined-logs/combined-%DATE%.log',
//   datePattern: 'YYYY-MM-DD',
//   zippedArchive: true,
//   maxSize: '20m',
//   maxFiles: '14d',
// });

// Create a Logtail transport for cloud logging

// const cloudTransport = new LogtailTransport({
//   api_key: process.env.CLOUD_LOGGER_API_KEY,
//   source_id: process.env.CLOUD_LOGGER_SOURCE_ID,
// });

// Create a logger with the transports
// const logger = createLogger({
//   format: format.combine(format.timestamp(), format.json()),
//   transports: [
//     errorTransport,
//     infoTransport,
//     combinedTransport,
//   ],
// });

// module.exports = logger;
