'use-strict';

var brandRoute = require('./brand');

module.exports = function(app) {
  app.use('/api/brands', brandRoute);
}