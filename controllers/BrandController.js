'use strict';

const Category = require("../models/Category");

exports.index = (req, res) => {
  const limit = req.limit || 10;
  const offset = req.offset || 0;
  const sort = req.sort || 'DESC'
  const orderBy = req.order || `created_at ${sort}`;
  const search = req.search;
}