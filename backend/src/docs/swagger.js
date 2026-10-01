const swaggerJsdoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Agricola Rancho Grande API',
      version: '0.0.1',
      description: 'Documentacion tecnica inicial del Incremento 0.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local de desarrollo',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
});

module.exports = { swaggerSpec };
