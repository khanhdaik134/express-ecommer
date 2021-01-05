module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payments", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    charge: {
      type: Sequelize.DOUBLE
    },
    message: {
      type: Sequelize.STRING
    }
  });

  return Payment;
};