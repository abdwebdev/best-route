const Quote = require('../models/Quote');
const { getIsConnected } = require('../config/database');

// Helper price estimator logic
const calculateEstimatePrice = (propertyType, movingFrom, movingTo, needPacking, needStorage) => {
  let baseMin = 750;
  let baseMax = 1200;

  if (propertyType.includes('Studio')) {
    baseMin = 650; baseMax = 1100;
  } else if (propertyType.includes('1 BHK')) {
    baseMin = 850; baseMax = 1400;
  } else if (propertyType.includes('2 BHK')) {
    baseMin = 1300; baseMax = 2200;
  } else if (propertyType.includes('3 BHK')) {
    baseMin = 2000; baseMax = 3300;
  } else if (propertyType.includes('Villa')) {
    baseMin = 2800; baseMax = 5000;
  } else if (propertyType.includes('Office')) {
    baseMin = 1800; baseMax = 4500;
  }

  // Inter-emirate surcharge
  if (movingFrom !== movingTo) {
    baseMin += 350;
    baseMax += 600;
  }

  // Add-ons
  if (needPacking) {
    baseMin += 250;
    baseMax += 450;
  }
  if (needStorage) {
    baseMin += 400;
    baseMax += 700;
  }

  return { min: baseMin, max: baseMax };
};

// In-memory fallback array when DB is disconnected
const inMemoryQuotes = [];

exports.createQuote = async (req, res, next) => {
  try {
    const {
      fullName,
      phone,
      movingFrom = 'Dubai',
      movingTo = 'Dubai',
      propertyType = '1 BHK Apartment',
      serviceRequired = 'Home Relocation',
      preferredDate = 'As soon as possible',
      needPacking = false,
      needStorage = false,
      additionalNotes = '',
    } = req.body;

    if (!fullName || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Full name and phone number are required.',
      });
    }

    const { min, max } = calculateEstimatePrice(
      propertyType,
      movingFrom,
      movingTo,
      Boolean(needPacking),
      Boolean(needStorage)
    );

    const quoteData = {
      fullName,
      phone,
      movingFrom,
      movingTo,
      propertyType,
      serviceRequired,
      preferredDate,
      needPacking: Boolean(needPacking),
      needStorage: Boolean(needStorage),
      additionalNotes,
      estimatedPriceMin: min,
      estimatedPriceMax: max,
      createdAt: new Date(),
    };

    let savedQuote = quoteData;

    if (getIsConnected()) {
      savedQuote = await Quote.create(quoteData);
    } else {
      inMemoryQuotes.push({ id: Date.now().toString(), ...quoteData });
    }

    // Build WhatsApp URL for instant client feedback
    const whatsappMsg = `Hello Best Route Relocation Services,%0A%0AI would like to request a moving quote:%0A- *Name:* ${encodeURIComponent(fullName)}%0A- *Phone:* ${encodeURIComponent(phone)}%0A- *Moving From:* ${encodeURIComponent(movingFrom)}%0A- *Moving To:* ${encodeURIComponent(movingTo)}%0A- *Property:* ${encodeURIComponent(propertyType)}%0A- *Service:* ${encodeURIComponent(serviceRequired)}%0A- *Estimated Price:* AED ${min} - ${max}%0A- *Packing:* ${needPacking ? 'Yes' : 'No'}%0A- *Storage:* ${needStorage ? 'Yes' : 'No'}%0A- *Preferred Date:* ${encodeURIComponent(preferredDate)}%0A- *Notes:* ${encodeURIComponent(additionalNotes || 'None')}`;
    const whatsappUrl = `https://wa.me/971581401608?text=${whatsappMsg}`;

    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully!',
      data: savedQuote,
      estimate: { min, max },
      whatsappUrl,
    });
  } catch (error) {
    next(error);
  }
};

exports.getEstimate = async (req, res) => {
  const { propertyType = '1 BHK Apartment', movingFrom = 'Dubai', movingTo = 'Dubai', needPacking = 'false', needStorage = 'false' } = req.query;
  const estimate = calculateEstimatePrice(
    propertyType,
    movingFrom,
    movingTo,
    needPacking === 'true',
    needStorage === 'true'
  );
  return res.json({ success: true, estimate });
};

exports.getAllQuotes = async (req, res, next) => {
  try {
    if (getIsConnected()) {
      const quotes = await Quote.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: quotes.length, data: quotes });
    }
    res.json({ success: true, count: inMemoryQuotes.length, data: inMemoryQuotes });
  } catch (error) {
    next(error);
  }
};
