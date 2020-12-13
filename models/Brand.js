'use strict';

const Model = require("./Model");

class Brand extends Model{
  constructor(brand){
    this.id = brand.id;
    this.title = brand.title;
    this.logo = brand.logo;
    this.created_at = brand.created_at;
    this.updated_at = brand.updated_at;
  }
}
Brand.prototype.table = 'brands';

module.exports = Brand;