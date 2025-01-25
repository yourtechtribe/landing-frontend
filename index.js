const express = require('express');
const app = express();
const port = 3000;

// Route: GET /
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
if (require.main == module) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

module.exports = app; // Export app for testing
