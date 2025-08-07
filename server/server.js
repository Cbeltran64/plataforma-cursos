// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares básicos
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de salud
app.get('/api/health', (_, res) => res.json({ status: 'OK', uptime: process.uptime() }));

const authRoutes = require('./routes/auth/auth.routes');
app.use('/api/auth', authRoutes);

const userRoutes = require('./routes/users/users.routes');
app.use('/api/users', userRoutes);

// Catch 404
app.use((_, res) => res.status(404).json({ message: 'Ruta no encontrada' }));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});