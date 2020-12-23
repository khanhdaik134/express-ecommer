'use-strict';

var orderController = require('../controllers/OrderController');
var sneakerController = require('../controllers/SneakerController');
var brandController = require('../controllers/BrandController');

module.exports = function(app) {
  app.post('/api/orders', orderController.create);

  // sneakers
  app.get('/api/sneakers', sneakerController.index);
  app.get('/api/sneakers/:id', sneakerController.show);
}