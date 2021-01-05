'use strict';

const Order = require("../models/Order");

exports.index = (req, res) => {
  const limit = req.limit || 10;
  const offset = req.offset || 0;
  const sort = req.sort || 'DESC'
  const orderBy = req.order || `created_at ${sort}`;
  const search = req.search;
  
  res.status(200).send({
    message: req.userId
  });

}

exports.create = (req, res) => {
  const userId = req.body.user_id || null;
  const fullName = req.body.full_name;
  const phone = req.body.phone;
  const email = req.body.email;
  const address = req.body.address;
  const paymentMethod = req.body.payment_method;
  let orderDetail = req.body.order_detail ? JSON.parse(req.body.order_detail) : [];

  const order = [
    userId, fullName, phone, email, address, paymentMethod
  ];

  Order.prototype.create(order, (data, err) => {
    if (err) {
      return res.send(err);
    }
    if (data) {
      orderDetail = orderDetail.map((el) => {
        return [data.insertId, ...el];
      });
      Order.prototype.createMultipleOrder(orderDetail, (response, error) => {
        if (error) {
          console.log(err);
          return res.send(err);
        }
        res.status(200).send(response);
      })
    }
  })

}