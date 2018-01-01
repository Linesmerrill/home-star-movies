var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('movies', { title: 'Express' });
});

router.get('/tank', function(req, res, next) {
  res.render('tank', { title: 'Express' });
});

router.get('/13hours', function(req, res, next) {
  res.render('13hours', { title: 'Express' });
});

router.get('/americanassassin', function(req, res, next) {
  res.render('americanassassin', { title: 'Express' });
});

router.get('/castaway', function(req, res, next) {
  res.render('castaway', { title: 'Express' });
});

router.get('/deepwaterhorizon', function(req, res, next) {
  res.render('deepwaterhorizon', { title: 'Express' });
});

router.get('/theworldsend', function(req, res, next) {
  res.render('theworldsend', { title: 'Express' });
});

router.get('/cars', function(req, res, next) {
  res.render('cars', { title: 'Express' });
});

router.get('/edgeoftomorrow', function(req, res, next) {
  res.render('edgeoftomorrow', { title: 'Express' });
});

router.get('/elf', function(req, res, next) {
  res.render('elf', { title: 'Express' });
});

router.get('/firefox', function(req, res, next) {
  res.render('firefox', { title: 'Express' });
});

router.get('/frozen', function(req, res, next) {
  res.render('frozen', { title: 'Express' });
});

router.get('/fury', function(req, res, next) {
  res.render('fury', { title: 'Express' });
});

router.get('/groundhogday', function(req, res, next) {
  res.render('groundhogday', { title: 'Express' });
});

module.exports = router;
