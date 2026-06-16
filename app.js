const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const db = require('./models');
const courseRoutes = require('./src/routes/course.routes');
const classRoutes = require('./src/routes/class.routes');
const notFoundHandler = require('./src/middlewares/not-found-handler');
const errorHandler = require('./src/middlewares/error-handler');

const app = express();
const PORT = process.env.PORT || 3000;

// express.json parses JSON request bodies so controllers can read req.body.
app.use(express.json());

// Morgan logs each API call, which satisfies the challenge logging requirement.
app.use(morgan('dev'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'API Running'
    });
});

app.get('/users', async (req, res, next) => {
    try {
        const users = await db.users.findAll();
        res.json({
            status: 'success',
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (error) {
        next(error);
    }
});

// Main challenge routes. Use /api prefix to keep API URLs organized.
app.use('/api/courses', courseRoutes);
app.use('/api/classes', classRoutes);

// Temporary aliases keep your old URLs working while you learn the /api convention.
app.use('/courses', courseRoutes);
app.use('/classes', classRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

db.sequelize.authenticate()
    .then(() => {
        console.log('DB Connected');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
            console.log(`Swagger running on http://localhost:${PORT}/api-docs`);
        });
    })
    .catch((error) => {
        console.error('DB connection failed', error);
    });

module.exports = app;
