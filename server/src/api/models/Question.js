const mongoose = require('mongoose');

// create the schema for the Question model
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'Question is required'],
    trim: true,
  },
  team_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Team',
  },
  is_submitted: {
    type: Boolean,
    default: false,
  },
  submission_link: {
    type: String,
    default: '',
  },
  added_at: {
    type: Date,
    default: Date.now,
  },
  submitted_at: {
    type: Date,
    default: null,
  },
});

// create the model for the Question schema
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
