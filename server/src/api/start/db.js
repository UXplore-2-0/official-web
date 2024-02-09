const mongoose = require('mongoose');
const logger = require('./logger');

const dbConnect = async () => {
  const dbUri = process.env.MONGO_DATABASE.replace(
    '<PASSWORD>',
    process.env.MONGO_DATABASE_PASSWORD
  );

  mongoose.set('strictQuery', false);

  await mongoose
    .connect(dbUri)
    .then(() => {
      logger.info('Database connect successfully');
    })
    .catch((err) => {
      logger.error('Database connection failed: ', err);
    });
};

module.exports = dbConnect;
