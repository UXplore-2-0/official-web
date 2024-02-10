const mongoose = require('mongoose');

// create the schema for the QA model
const qaSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'Question is required'],
    trim: true,
  },
  team_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Team',
  },
  is_answered: {
    type: Boolean,
    default: false,
  },
  answer: {
    type: String,
    default: '',
  },
});

// create the model for the QA schema
const QA = mongoose.model('QA', qaSchema);

module.exports = QA;
