const mongoose = require('mongoose');

// create the schema for the Member model
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [255, 'Name must be less than 255 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    maxlength: [255, 'Email must be less than 255 characters'],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please provide a valid email',
    ],
  },
  university: {
    type: String,
    required: [true, 'University is required'],
    trim: true,
    maxlength: [255, 'University must be less than 255 characters'],
  },
  team_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Team',
  },
  uni_index: {
    type: String,
    required: [true, 'University index is required'],
    trim: true,
    maxlength: [100, 'University index must be less than 100 characters'],
  },
  contact_no: {
    type: String,
    required: [true, 'Contact number is required'],
    trim: true,
    match: [
      /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      'Please provide a valid contact number',
    ],
  },
  beverages: {
    type: String,
    required: false,
    trim: true,
    enum: ['non-veg', 'veg'],
  },
  added_at: {
    type: Date,
    default: Date.now,
  },
});

// create the model for the Member schema
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
