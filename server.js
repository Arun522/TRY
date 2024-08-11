const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Integrate route files
const articlesRoutes = require('./routes/articles');
const videosRoutes = require('./routes/videos');

// Use the routes
app.use('/articles', articlesRoutes);
app.use('/videos', videosRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
