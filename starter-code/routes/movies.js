const express = require('express');

const moviesRouter = express.Router();

const Movie = require('../models/Movie');

/* GET movies page */
moviesRouter.get('/', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render('movies', { movies });
    })
    .catch((error) => {
      console.log(error);
    });
});

/* GET movies detail */
moviesRouter.get('/movie/:id', (req, res) => {
  const celebrityId = req.params.id;
  Movie.findOne({ _id: celebrityId })
    .then((movie) => {
      res.render('movies/show', { movie });
    })
    .catch((error) => {
      console.log(error);
    });
});

/* GET movies add */
moviesRouter.get('/new', (req, res) => {
  res.render('movies/new');
});
/* POST movies add */
moviesRouter.post('/new', (req, res) => {
  const { title, genre, plot } = req.body;
  const newMovie = new Movie({ title, genre, plot });
  newMovie.save()
    .then(() => {
      res.redirect('/movies');
    })
    .catch((error) => {
      console.log(error);
    });
});

/* POST movies delete */
moviesRouter.post('/movies/:id/delete', (req, res, next) => {
  const movieId = req.params.id;
  Movie.findByIdAndRemove({ _id: movieId })
    .then(() => {
      res.redirect('/movies');
    })
    .catch((error) => {
      next();
      console.log(error);
    });
});

module.exports = moviesRouter;
