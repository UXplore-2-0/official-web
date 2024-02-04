const dotenv = require('dotenv');
const connectDB = require('./config/dbConnect');
const logger = require('./utils/logger');

dotenv.config({ path: './config.env' });
const app = require('./app');

//? Handle uncaught exceptions:
process.on('uncaughtException', (err) => {
  // logger.error(
  //   `UNCAUGHT EXCEPTION! 💥 Shutting down... ${err.name} ${err.message}`
  // );
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

//Database Connection:
connectDB();

//Display ENVIROMENT
console.log(`Enviroment: ${process.env.NODE_ENV}Stage`);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

//? Handle unhandled promise rejections:
process.on('unhandledRejection', (err) => {
  // logger.error(
  //   `UNHANDLED REJECTION! 💥 Shutting down... ${err.name} ${err.message} ${err.stack}`
  // );
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  console.log(err.stack);
  server.close(() => {
    process.exit(1);
  });
});
