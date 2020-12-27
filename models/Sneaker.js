'use strict';

const Model = require("./Model");

class Sneaker extends Model {
  constructor(){

  }

  getAll(search, limit, offset, orderBy, callback){
    let orderByStr = orderBy ? `ORDER BY ${orderBy}` : '';
    let searchStr = search ? this.objectToString(search) : '';
    let queryStr = `SELECT ${this.table}.*,brands.title as brand, brands.logo FROM ${this.table} INNER JOIN brands ON brands.id = ${this.table}.brand_id ${searchStr} ${orderByStr} LIMIT ${limit || 10} OFFSET ${offset || 0}`;
    console.log(queryStr);
    this.getConnection().query(queryStr, function (res, err) {
      return callback(res, err);
    });
  }
};
Sneaker.prototype.table = 'sneakers';
module.exports = Sneaker;