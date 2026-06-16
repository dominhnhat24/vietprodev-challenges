// This middleware runs when no route matched the request.
const notFoundHandler = (req, res) => {
    return res.status(404).json({
        status: 'error',
        message: 'Route not found',
        violations: [
            {
                field: 'path',
                message: `${req.method} ${req.originalUrl} is not supported`
            }
        ]
    });
};

module.exports = notFoundHandler;
