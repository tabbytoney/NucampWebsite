const express = require('express');
const Favorite = require('../models/favorite');
const authenticate = require('../authenticate');
const cors = require('./cors');
const favoriteRouter = express.Router();

favoriteRouter
  .route('/')
  .options(cors.corsWithOptions, authenticate.verifyUser, (req, res) =>
    res.sendStatus(200)
  )
  .get(cors.cors, (req, res, next) => {
    Favorite.find()
      .populate('campsites')
      .then((campsites) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(campsites);
      })
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findOne({ user: req.user._id }).then((favorite) => {
      if (favorite) {
        req.body.forEach((element) => {
          if (!favorite.campsites.includes(element._id)) {
            favorite.campsites.push(element._id);
          }
        });
        favorite
          .save()
          .then((favorite) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(favorite);
          })
          .catch((err) => next(err));
      } else {
        Favorite.create({ user: req.user._id, campsites: req.body })
          .then((favorite) => {
            console.log('Favorite Created ', favorite);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(favorite);
          })
          .catch((err) => next(err));
      }
    });
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /favorite');
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findOneAndDelete({ user: req.user._id }).then((response) => {
      res.statusCode = 200;
      if (response) {
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
      } else {
        res.setHeader('Content-Type', 'text/plain');
        res.end('You do not have any favorites to delete');
      }
    });
  });

favoriteRouter
  .route('/:campsiteId')
  .options(cors.corsWithOptions, authenticate.verifyUser, (req, res) =>
    res.sendStatus(200)
  )
  .get(cors.cors, (req, res, next) => {
    res.statusCode = 403;
    res.end(`GET operation not supported on ${req.params.campsiteId}`);
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findOne({ user: req.user._id }).then((favorite) => {
      if (favorite) {
        if (!favorite.campsites.includes(req.params.campsiteId)) {
          favorite.campsites.push(req.params.campsiteId);
          favorite
            .save()
            .then((favorite) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(favorite);
            })
            .catch((err) => next(err));
        } else {
          res.statusCode = 200;
          res.setHeader = ('Content-Type', 'text/plain');
          res.end('That campsite is already in the list of favorites!');
        }
      } else {
        Favorite.create({
          user: req.user._id,
          campsites: [req.params.campsiteId],
        })
          .then((favorite) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(favorite);
          })
          .catch((err) => next(err));
      }
    });
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /favorite');
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findOne({ user: req.user._id })
      .then((favorite) => {
        res.statusCode = 200;
        if (favorite) {
          const indexResult = favorite.campsites.indexOf(req.params.campsiteId);
          if (indexResult >= 0) {
            favorite.campsites.splice(indexResult, 1);
            favorite
              .save()
              .then((favorite) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(favorite);
              })
              .catch((err) => next(err));
          }
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('You have no favorites to delete!');
        }
      })
      .catch((err) => next(err));
  });

module.exports = favoriteRouter;
