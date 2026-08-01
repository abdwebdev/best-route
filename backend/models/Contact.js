const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    default: '',
  },
  serviceRequired: {
    type: String,
    default: 'General Inquiry',
  },
  movingFrom: {
    type: String,
    default: 'Dubai',
  },
  movingTo: {
    type: String,
    default: 'Dubai',
  },
  preferredDate: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Contact', contactSchema);
