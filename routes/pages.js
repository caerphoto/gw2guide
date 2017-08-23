var express = require('express');
var path = require('path');
var router = express.Router();

var basePath = path.join('/', process.env.BASE_PATH || '', '/');

// Root page is introduction.
router.get('/', function(req, res, next) {
  res.render('introduction',
    {
      pageName: 'introduction',
      title: 'Introduction',
      basePath: basePath
    });
});

var pages = [
  { name: 'introduction', title: 'Introduction' },
  { name: 'combat', title: 'Combat' },
  { name: 'equipment-stats', title: 'Equipment & Stats' },
  { name: 'traits-skills', title: 'Traits & Skills' }
];

pages.forEach(function(page) {
  router.get('/' + page.name, function(req, res, next) {
    res.render(page.name,
      {
        pageName: page.name,
        title: page.title,
        basePath: basePath
      });
  });
});

module.exports = router;

