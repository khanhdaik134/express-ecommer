'use strict';
var connection = require('../database/config');

class Model {
  constructor(model, table){
    this.model = model;
    this.table = table;
  }
  setConfig(config){
    this.config = config;
    this.validateConfig();
  }
  getConnection(){
    return connection;
  }
  getTableName(){
    return this.table;
  }
  validateConfig(){
    // if (!this.config.model) throw new Error('Model is missing');
    if (!this.config.table) throw new Error('Table name is missing');
  }
  objectToString(object){
    let str = '';
    let i = 0;
    if (!object) return '';
    for (const [key, value] of Object.entries(object)) {
      str += i === 0 ? `WHERE ${key} ${value}` : ` AND ${key} ${value}`;
      i++;
    }
    return str;
  }
  getAll(search, limit, offset, orderBy, callback){
    let orderByStr = orderBy ? `ORDER BY ${orderBy}` : '';
    let searchStr = search ? this.objectToString(search) : '';
    let queryStr = `SELECT * FROM ${this.table} ${searchStr} ${orderByStr} LIMIT ${limit || 10} OFFSET ${offset || 0}`;
    console.log(queryStr);
    connection.query(queryStr, function (res, err) {
      return callback(res, err);
    });
  }
  getById(id, callback){
    connection.query(`SELECT * FROM ${this.config.table} WHERE id = ?`, id,  (res, err) => {
      return callback(res, err);
    });
  }
  create(data, callback){
    connection.query(`INSERT INTO ${this.config.table} SET ?`, data,  (res, err) => {
      return callback(res, err);
    });
  }
  update(data, id, callback){
    connection.query(`UPDATE ${this.config.table} SET ? WHERE id = ?`, [data, id],  (res, err) => {
      return callback(res, err);
    });
  }
  delete(id, callback){
    connection.query(`DELETE FROM ${this.config.table} WHERE id = ?`, id,  (res, err) => {
      return callback(res, err);
    });
  }
}
module.exports = Model;