
const Sequelize = require('sequelize');

const sequelize = new Sequelize('comics-manager','root','password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
