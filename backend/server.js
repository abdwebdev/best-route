const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const { connectDB } = require('./config/database');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

// Route imports
const quoteRoutes = require('./routes/quoteRoutes');
const contactRoutes = require('./routes/contactRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Express Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// API Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Best Route Relocation Services API is running',
    timestamp: new Date(),
  });
});

// API Routes
app.use('/api/quotes', quoteRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/services', serviceRoutes);

// Serve static frontend files
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

// Page routes fallback
app.get('/about', (req, res) => {
  res.sendFile(path.join(frontendPath, 'about.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(frontendPath, 'services.html'));
});

app.get('/why-choose-us', (req, res) => {
  res.sendFile(path.join(frontendPath, 'why-choose-us.html'));
});

app.get('/process', (req, res) => {
  res.sendFile(path.join(frontendPath, 'process.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(frontendPath, 'faq.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(frontendPath, 'contact.html'));
});

// Any unmatched route serves index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`====================================================`);
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
  console.log(`📁 Serving Frontend from: ${frontendPath}`);
  console.log(`====================================================`);
});
