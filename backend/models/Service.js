const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    default: 'Relocation',
  },
  shortDesc: {
    type: String,
    required: true,
  },
  fullDesc: {
    type: String,
    required: true,
  },
  suitableFor: [String],
  benefits: [String],
  processSteps: [String],
  startingPrice: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Service', serviceSchema);
