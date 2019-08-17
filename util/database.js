
const Sequelize = require('sequelize');

const sequelize = new Sequelize('comics-manager','root','rainette63*', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;