const mongoose = require('mongoose');

// create the schema for the Notification model
const notificationSchema = new mongoose.Schema({
  message_title: {
    type: String,
    required: [true, 'Message title is required'],
    trim: true,
    maxlength: [255, 'Message title must be less than 255 characters'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
  },
  added_at: {
    type: Date,
    default: Date.now,
  },
});

// create the model for the Notification schema
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
