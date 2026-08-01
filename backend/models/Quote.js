const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
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
  movingFrom: {
    type: String,
    default: 'Dubai',
  },
  movingTo: {
    type: String,
    default: 'Dubai',
  },
  propertyType: {
    type: String,
    default: '1 BHK Apartment',
  },
  serviceRequired: {
    type: String,
    default: 'Home Relocation',
  },
  preferredDate: {
    type: String,
    default: 'As soon as possible',
  },
  needPacking: {
    type: Boolean,
    default: false,
  },
  needStorage: {
    type: Boolean,
    default: false,
  },
  additionalNotes: {
    type: String,
    default: '',
  },
  estimatedPriceMin: {
    type: Number,
    default: 750,
  },
  estimatedPriceMax: {
    type: Number,
    default: 1800,
  },
  status: {
    type: String,
    enum: ['Pending', 'Contacted', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Quote', quoteSchema);
