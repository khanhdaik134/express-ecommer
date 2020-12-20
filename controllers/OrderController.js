'use strict';

const Order = require("../models/Order");

exports.index = (req, res) => {
  const limit = req.limit || 10;
  const offset = req.offset || 0;
  const sort = req.sort || 'DESC'
  const orderBy = req.order || `created_at ${sort}`;
  const search = req.search;
  let searchObj = {};

  if (search) {
    searchObj = {
      title: `LIKE '%${search}%'`
    };
  }

  Brand.prototype.getAll(searchObj, limit, offset, orderBy, (data, err) => {
    if (err)
      return res.send(err);
    return res.status(200).send(data);
  });
}

exports.create = (req, res) => {
  const userId = req.body.user_id || null;
  const fullName = req.body.full_name;
  const phone = req.body.phone;
  const email = req.body.email;
  const address = req.body.address;
  const paymentMethod = req.body.payment_method;
  const orderDetail = req.body.order_detail ? JSON.parse(req.body.order_detail) : null;

  const order = [
    userId, fullName, phone, email, address, paymentMethod
  ];
  console.log(order);

  Order.prototype.create(order, (data, err) => {
    if (err)
      return res.send(err);
    console.log(data);
    return res.status(200).send(data);
  })

}