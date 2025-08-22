const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order'); // faylın adı order.js
const giftRoutes = require('./routes/gift');
const postsRoutes = require('./routes/posts');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);  // tək
app.use('/api/gift', giftRoutes);
app.use('/api/posts', postsRoutes);

// test route
app.get('/', (req, res) => {
  res.send('Bitter Soul Backend işləyir ☕');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
