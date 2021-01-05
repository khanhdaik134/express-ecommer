const { product } = require("../models/Model");
const db = require("../models/Model");
const Op = db.Sequelize.Op;
const Product = db.product;

exports.index = async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  const sort = req.query.sort || 'DESC'
  const orderBy = req.query.order || 'updatedAt';
  const search = req.query.q;
  const categoryId = req.query.category;

  const whereQuery = {};

  if (search) {
    whereQuery.name = {
      [Op.like]: `%${search}%`
    }
  }

  if (categoryId) {
    whereQuery.category_id = parseInt(categoryId, 10)
  }

  try{
    const products = await Product.findAll({
      include: db.category,
      where: whereQuery,
      order: [
        [orderBy, sort]
      ],
      limit: parseInt(limit, 10),
      offset: parseInt(offset, 10)
    });
  
    return res.status(200).send(products);
  }catch(error) {
    return res.status(500).send({
      message: error.message
    });
  }


};