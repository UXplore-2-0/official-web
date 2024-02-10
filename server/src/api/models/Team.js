const mongoose = require('mongoose');

// create the schema for the Team model
const teamSchema = new mongoose.Schema({
  team_name: {
    type: String,
    required: [true, 'Team name is required'],
    unique: true,
    trim: true,
    maxlength: [50, 'Team name must be less than 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    maxlength: [255, 'Email must be less than 50 characters'],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  team_members: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Team',
    },
  ],
  is_verified: {
    type: Boolean,
    default: false,
  },
  verification_token: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: 'team',
    enum: ['team', 'admin'],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
