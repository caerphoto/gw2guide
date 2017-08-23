var express = require('express');
var router = express.Router();

// Root page is introduction.
router.get('/', function(req, res, next) {
  res.render('introduction', { pageName: 'introduction', title: 'Introduction' });
});

var pages = [
  { name: 'introduction', title: 'Introduction' },
  { name: 'combat', title: 'Combat' },
  { name: 'equipment-stats', title: 'Equipment & Stats' },
  { name: 'traits-skills', title: 'Traits & Skills' }
];

pages.forEach(function(page) {
  router.get('/' + page.name, function(req, res, next) {
    res.render(page.name, { pageName: page.name, title: page.title });
  });
});

module.exports = router;

