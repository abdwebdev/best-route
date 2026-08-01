# Best Route Relocation Services - Full Stack MERN Application

A complete full-stack web application for **Best Route Relocation Services**, built with a clean Node.js/Express & MongoDB backend and a responsive HTML/CSS/JavaScript frontend.

---

## 📁 Project Structure

```text
.
├── frontend/
│   ├── index.html         # Homepage with hero, instant price calculator, and modal quote request
│   ├── about.html         # About page with company background and guarantees
│   ├── services.html      # Detailed list of moving & storage services
│   ├── contact.html       # Contact form, direct phone/WhatsApp links, and headquarters info
│   ├── css/
│   │   └── style.css      # Custom responsive dark-theme stylesheet
│   ├── js/
│   │   └── script.js      # Frontend client script using Fetch API to communicate with backend
│   ├── images/
│   └── assets/
│
├── backend/
│   ├── config/
│   │   └── database.js    # Mongoose MongoDB connection setup with graceful fallback
│   ├── models/
│   │   ├── Quote.js       # Mongoose schema for quote requests
│   │   ├── Contact.js     # Mongoose schema for contact messages
│   │   └── Service.js     # Mongoose schema for relocation services
│   ├── controllers/
│   │   ├── quoteController.js   # Quote calculation & creation logic
│   │   ├── contactController.js # Contact form handling logic
│   │   └── serviceController.js # Services retrieval logic
│   ├── routes/
│   │   ├── quoteRoutes.js   # REST API endpoints for /api/quotes
│   │   ├── contactRoutes.js # REST API endpoints for /api/contacts
│   │   └── serviceRoutes.js # REST API endpoints for /api/services
│   ├── middleware/
│   │   ├── errorHandler.js  # Express global error handler
│   │   └── logger.js        # Express request logging middleware
│   ├── server.js            # Main Express server serving APIs and static frontend
│   ├── package.json         # Backend node dependencies
│   └── .env                 # Environment variables (PORT, MONGODB_URI)
│
├── package.json             # Root package configuration
├── README.md                # Project documentation
└── .gitignore               # Ignored files (node_modules, .env, etc.)
```

---

## 🚀 Features

- **HTML/CSS/JS Frontend**: Pure vanilla frontend without React or complex build tools.
- **Node.js & Express REST API**: Modular backend with express routers, controllers, and error handlers.
- **MongoDB & Mongoose**: Object Data Modeling for quotes, contact inquiries, and services.
- **Interactive Move Price Estimator**: Instant price estimation based on property size, route, and add-on packing/storage options.
- **Automated WhatsApp Prefilled Chat**: On submitting quote or contact forms, the backend compiles all details and opens WhatsApp with prefilled text automatically.
- **Responsive Design**: Designed for mobile, tablet, and desktop views with a floating quick-action bar on mobile screens.

---

## ⚙️ How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Update `backend/.env`:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/best_route_relocation
   NODE_ENV=development
   ```

3. **Start Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.
