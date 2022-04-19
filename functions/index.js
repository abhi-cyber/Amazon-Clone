const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KlWkSSDy0axSTkZUvK3udUUIDBkTn9xuytfUaWyTqCAgCqUUcbmpe0gt5NSLfmQSDI9LkayC51p7H92zn0kMRd800A4ozOahU')

// API

// App Config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// API routes

// Listen Command