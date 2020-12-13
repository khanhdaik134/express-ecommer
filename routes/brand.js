var express = require('express');
var router = express.Router();

var brandController = require('../controllers/BrandController');

router.get('/', brandController.index);

module.exports = router;