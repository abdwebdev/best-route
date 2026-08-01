const express = require('express');
const router = express.Router();
const { createQuote, getEstimate, getAllQuotes } = require('../controllers/quoteController');

router.post('/', createQuote);
router.get('/estimate', getEstimate);
router.get('/', getAllQuotes);

module.exports = router;
