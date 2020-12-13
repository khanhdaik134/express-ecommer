require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const port = process.env.PORT || 3001;

app.listen(port);

console.log('RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/routes');
routes(app);