'use strict';

const Model = require("./Model");

class Sneaker extends Model {
  constructor(){

  }
};
Sneaker.prototype.table = 'sneakers';
module.exports = Sneaker;