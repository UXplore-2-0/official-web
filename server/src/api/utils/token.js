const bcrypt = require('bcrypt');
const crypto = require('crypto');

function hashPassword(password) {
  const hashSalt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(password, hashSalt);
}

function compare(password, hash) {
  return bcrypt.compareSync(password, hash);
}

function generateVerificationToken() {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(20, (err, buf) => {
      if (err) {
        reject(err);
      } else {
        let token = buf.toString('hex');
        resolve(token);
      }
    });
  });
}

module.exports = {
  hashPassword,
  compare,
  generateVerificationToken,
};
