const createError = require("http-errors");

//404 not found handler
exports.notFoundHandler = (req, res, next) => {
  next(createError(404, "Your requested content was not found"));
};

//default error handler
exports.errorHandler = (err, req, res, next) => {
  res.render("error", {
    title: "Error page",
  });
};
