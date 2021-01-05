'use-strict';

const { verifySignUp, authJwt } = require("../middleware/index");

const authController = require("../controllers/AuthController");
const productController = require("../controllers/ProductController");

var orderController = require('../controllers/OrderController');
var sneakerController = require('../controllers/SneakerController');
var brandController = require('../controllers/BrandController');

module.exports = function(app) {

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp
    ],
    authController.signup
  );

  app.post("/api/auth/login", authController.signin);

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Emirat Sneaker." });
  });

  app.post('/api/orders', orderController.create);

  // products
  app.get('/api/products', productController.index);
  app.get('/api/products/:id', sneakerController.show);

  //orders

  app.get('/api/orders', [authJwt.verifyToken], orderController.index);


}