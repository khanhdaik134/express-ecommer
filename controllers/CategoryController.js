const db = require("../models/Model");
const Op = db.Sequelize.Op;
const Category = db.category;

exports.index = async (req, res) => {
  try{
    const categories = await Category.findAll();
  
    return res.status(200).send(categories);
  }catch(error) {
    return res.status(500).send({
      message: error.message
    });
  }
};