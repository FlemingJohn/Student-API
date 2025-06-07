const express = require('express');
const app = express();
const PORT = 3000;

// ✅ Import route
const studentRoutes = require('./routes/studentRoutes');

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Use /students route
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Student API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
