import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';

// Route files
import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Product API is running!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});