'use strict';

exports.index = (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const sort = req.query.sort || 'DESC'
  const orderBy = req.query.order || `updated_at ${sort}`;
  const search = req.query.search;
  const brandId = req.query.brand;
  
}

exports.show = (req, res) => {
  
}