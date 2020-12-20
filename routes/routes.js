'use-strict';

var orderController = require('../controllers/OrderController');

module.exports = function(app) {
  app.post('/api/orders', orderController.create);
}