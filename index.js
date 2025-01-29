const express = require('express');
const app = express();

// Usa el puerto definido en la variable de entorno PORT o el 8080 por defecto
const port = process.env.PORT || 8080;

// Route: GET /
app.get('/', (req, res) => {
  res.send('Goodbye World');
});
 
// Start server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

module.exports = app; // Export app for testing
