const express = require('express');
const path = require('path');
const items = require('./data/items.json');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API route to send JSON data
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
