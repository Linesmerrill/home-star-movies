var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('movies', { title: 'Express' });
});

router.get('/tank', function(req, res, next) {
  res.render('tank', { title: 'Express' });
});

module.exports = router;
