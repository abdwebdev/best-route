const Contact = require('../models/Contact');
const { getIsConnected } = require('../config/database');

const inMemoryContacts = [];

exports.submitContact = async (req, res, next) => {
  try {
    const {
      fullName,
      phone,
      email = '',
      serviceRequired = 'General Inquiry',
      movingFrom = 'Dubai',
      movingTo = 'Dubai',
      preferredDate = '',
      message = '',
    } = req.body;

    if (!fullName || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Full name and phone number are required.',
      });
    }

    const contactData = {
      fullName,
      phone,
      email,
      serviceRequired,
      movingFrom,
      movingTo,
      preferredDate,
      message,
      createdAt: new Date(),
    };

    let savedContact = contactData;

    if (getIsConnected()) {
      savedContact = await Contact.create(contactData);
    } else {
      inMemoryContacts.push({ id: Date.now().toString(), ...contactData });
    }

    const whatsappMsg = `Hello Best Route Relocation Services,%0A%0AI sent a message via website contact form:%0A- *Name:* ${encodeURIComponent(fullName)}%0A- *Phone:* ${encodeURIComponent(phone)}%0A- *Email:* ${encodeURIComponent(email || 'N/A')}%0A- *Service:* ${encodeURIComponent(serviceRequired)}%0A- *From:* ${encodeURIComponent(movingFrom)} -> *To:* ${encodeURIComponent(movingTo)}%0A- *Message:* ${encodeURIComponent(message || 'N/A')}`;
    const whatsappUrl = `https://wa.me/971581401608?text=${whatsappMsg}`;

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: savedContact,
      whatsappUrl,
    });
  } catch (error) {
    next(error);
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    if (getIsConnected()) {
      const messages = await Contact.find().sort({ createdAt: -1 });
      return res.json({ success: true, count: messages.length, data: messages });
    }
    res.json({ success: true, count: inMemoryContacts.length, data: inMemoryContacts });
  } catch (error) {
    next(error);
  }
};
