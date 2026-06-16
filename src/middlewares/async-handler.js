// Express 5 can catch many async errors, but this wrapper keeps the pattern explicit.
// Any thrown error is passed to the global error handler through next(error).
const asyncHandler = (handler) => {
    return (req, res, next) => {
        Promise.resolve(handler(req, res, next)).catch(next);
    };
};

module.exports = asyncHandler;
