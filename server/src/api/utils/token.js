const bcrypt = require('bcrypt');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

function hashPassword(password) {
  const hashSalt = bcrypt.genSaltSync(10);

  return bcrypt.hashSync(password, hashSalt);
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

function generateJWT(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
}

module.exports = {
  hashPassword,
  generateVerificationToken,
  generateJWT,
};
