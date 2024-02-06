const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
    },
    university: {
      type: String,
      required: [true, 'University is Required !'],
    },
    t01name: {
      type: String,
      required: [true, 'Name is Required !'],
    },
    t01contact: {
      type: String,
      required: [true, 'Contact No is Required !!'],
    },
    t01university_index: {
      type: String,
      required: [true, 'University Index is Required !!'],
    },
    t02name: {
      type: String,
      required: [true, 'Name is Required !'],
    },
    t02university_index: {
      type: String,
      required: [true, 'University Index is Required !!'],
    },
    t03name: {
      type: String,
      required: [true, 'Name is Required !'],
    },
    t03university_index: {
      type: String,
      required: [true, 'University Index is Required !!'],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: { virtuals: true },
  }
);

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
