const mongoose = require('mongoose');

const dbConnect = async () => {
  const dbUri = process.env.DATABASE;

  mongoose.set('strictQuery', false);

  await mongoose
    .connect(dbUri)
    .then(() => {
      console.log('Database connect successfully');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = dbConnect;
