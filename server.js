const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DIST_DIR = path.join(__dirname, 'dist');

// Serve static files from the Vite build
app.use(express.static(DIST_DIR));

// SPA fallback: serve index.html for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
