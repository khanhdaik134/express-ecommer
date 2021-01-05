const db = require("../models/Model");
const User = db.user;

checkDuplicateUsername = (req, res, next) => {
  if (!req.body.email)
    return res.status(400).send({
      message: 'Email missing'
    });
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Email is already in use!"
      });
      return;
    }

    next();
  });
};

module.exports = checkDuplicateUsername;

