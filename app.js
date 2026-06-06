const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const db = require('./models');

const app = express();

app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Test route
app.get('/', (req, res) => {
  res.send('API Running');
});

// Users API
app.get('/users', async (req, res) => {
  const users = await db.users.findAll();
  res.json(users);
});

// DB connect check
db.sequelize.authenticate()
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});