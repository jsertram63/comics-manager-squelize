const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Month = sequelize.define('Month', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  
});

module.exports = Month;