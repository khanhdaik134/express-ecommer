'use strict';

const Sneaker = require("../models/Sneaker");

exports.index = (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const sort = req.query.sort || 'DESC'
  const orderBy = req.query.order || `created_at ${sort}`;
  const search = req.query.search;
  const brandId = req.query.brand;
  let searchObj = {};

  if (search) {
    searchObj = {
      title: `LIKE '%${search}%'`
    };
  }
  
  if (brandId) {
    searchObj.brand_id = `= ${brandId}`;
  }

  Sneaker.prototype.getAll(searchObj, limit, offset, orderBy, (data, err) => {
    if (err)
      return res.send(err);
    return res.status(200).send(data);
  });
}

exports.show = (req, res) => {
  const id = req.params.id;

  Sneaker.prototype.getById(id, (data, err) => {
    if (err)
      return res.send(err);
    return res.status(200).send(data);
  });
}