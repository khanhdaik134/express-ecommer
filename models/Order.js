'use strict';

const connection = require("../database/config");
const Model = require("./Model");

class Order extends Model{
  constructor(order){
    this.id = order.id;
    this.user_id = order.user_id;
    this.full_name = order.full_name;
    this.phone = order.phone;
    this.address = order.address;
    this.payment_method = order.payment_method;
    this.status = order.status;
    this.detail = order.detail;
    this.created_at = order.created_at;
    this.updated_at = order.updated_at;
  }
  create(order, callback){
    connection.query(`INSERT INTO ${this.table} (user_id, full_name, phone, email, address, payment_method) VALUES (?,?,?,?,?,?)`, order,  (res, err) => {
      return callback(res, err);
    });
  }
  createMultipleOrder(data, callback){
    connection.query(`INSERT INTO ${this.table} VALUES ?`, data,  (res, err) => {
      return callback(res, err);
    });
  }
}
Order.prototype.table = 'orders';

module.exports = Order;