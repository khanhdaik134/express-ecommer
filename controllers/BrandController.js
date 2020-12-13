'use strict';

const Brand = require("../models/Brand");

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