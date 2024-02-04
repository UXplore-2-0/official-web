const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const teamSchema = new mongoose.Schema(
  {
    teamName: {
      type: String,
      required: [true, 'Team name is required !!!'],
      unique: [true, 'Team name already taken !!!'],
    },
    email: {
      type: String,
      required: [true, 'Email is required !!!'],
      unique: [true, 'Email is already exists !!!'],
      validate: [validator.isEmail, 'Vaild email is required !!!'],
    },
    password: {
      type: String,
      minlength: 8,
      select: false,
    },
    activationString: {
      type: String,
    },
    teamVerified: {
      type: Boolean,
      default: false,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: { virtuals: true },
  }
);

//Virtual populate
teamSchema.virtual('memberData', {
  ref: 'Member',
  foreignField: 'team',
  localField: '_id',
  justOne: true,
});

//? PRE-MIDDLEWARE - DOCUMENT MIDDLEWARE: Runs before .save() and .create()

//? INSTANCE METHODS: Methods available on all documents of a certain collection

//* Check Whether Password is Correct

teamSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

//* Generate activationString
teamSchema.methods.createActivationString = function () {
  const activateString = crypto.randomBytes(32).toString('hex');

  this.activationString = crypto
    .createHash('sha256')
    .update(activateString)
    .digest('hex');

  this.save({ validateBeforeSave: false });
  return activateString;
};

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
