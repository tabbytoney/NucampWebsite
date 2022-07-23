const express = require('express');
const historyRouter = express.Router();

historyRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res) => {
    res.end('Will send all the weird stories to you');
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /weirdStories');
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /weirdStories');
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /weirdStories');
  });

module.exports = historyRouter;
