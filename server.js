require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());
app.listen(port);

console.log('RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/routes');
routes(app);