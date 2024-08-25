const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PSD, {
  dialect: 'mysql',
  host: process.env.DB_HOST
});

module.exports = sequelize;