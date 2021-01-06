'use strict';

const db = require("../models/Model");
const Op = db.Sequelize.Op;
const Order = db.order;

exports.index = async (req, res) => {
  try{
    const orders = await Order.findAll({
      where: {
        user_id: req.userId
      },
      include: db.product
    });
  
    return res.status(200).send(orders);
  }catch(error) {
    return res.status(500).send({
      message: error.message
    });
  }

}

exports.create = (req, res) => {
  const userId = req.body.user_id || null;
  const fullName = req.body.full_name || '';
  const phone = req.body.phone || '';
  const email = req.body.email || '';
  const address = req.body.address || '';
  const paymentMethod = req.body.payment_method || 1;
  let orderDetail = req.body.order_detail ? JSON.parse(req.body.order_detail) : [];

  if (orderDetail.length <= 0) return res.send({ message: 'You need choose some product to create order' });

  Order.create({
    full_name: fullName,
    phone: phone,
    email: email,
    address: address,
    user_id: userId
  })
    .then(order => {
      order.setProducts(orderDetail, { through: { number: 1 } }).then(() => {
        res.send({ message: `Order ${order.id} was created` });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

}