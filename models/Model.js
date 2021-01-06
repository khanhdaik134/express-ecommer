const Sequelize = require("sequelize");
const config = require("../database/config");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./User")(sequelize, Sequelize);
db.role = require("./Role")(sequelize, Sequelize);
db.category = require("./Category")(sequelize, Sequelize);
db.order = require("./Order")(sequelize, Sequelize);
db.payment = require("./Payment")(sequelize, Sequelize);
db.product = require("./Product")(sequelize, Sequelize);

db.category.hasOne(db.product, {
  foreignKey: "category_id"
});
db.product.belongsTo(db.category, {
  foreignKey: "category_id"
});
db.user.hasMany(db.order, {
  foreignKey: "user_id"
});
db.order.belongsTo(db.user, {
  foreignKey: "user_id"
});
db.order.hasOne(db.payment, {
  foreignKey: "order_id"
});
OrderDetail = sequelize.define('order_detail', {
  number: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});
db.product.belongsToMany(db.order, {
  through: OrderDetail,
  foreignKey: "product_id",
  otherKey: "order_id"
});

db.order.belongsToMany(db.product, {
  through: OrderDetail,
  foreignKey: "order_id",
  otherKey: "product_id"
});

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "role_id",
  otherKey: "user_id"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "user_id",
  otherKey: "role_id"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;