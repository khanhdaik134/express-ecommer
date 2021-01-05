module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("categories", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    logo: {
      type: Sequelize.STRING
    }
  });

  return Category;
};