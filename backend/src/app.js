const cors = require('cors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');

const { swaggerSpec } = require('./docs/swagger');
const healthRoutes = require('./routes/health.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/health', healthRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'Endpoint no encontrado.',
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    error: err.name || 'Internal Server Error',
    message: err.message || 'Error interno del servidor.',
  });
});

module.exports = app;
