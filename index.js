const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const text = "Hello again world"
app.get('/', (req, res) => {
  res.send(text);
});
 
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servere is running at http://localhost:${port}`);
  });
}

module.exports = { app, text };

