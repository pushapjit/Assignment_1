var express = require('express');
var router = express.Router();

/* Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pushapjit Singh | Web Designer' });
});
/* About Page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* Contact Page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
/* Projects Page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
/* Services Page */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
module.exports = router;
