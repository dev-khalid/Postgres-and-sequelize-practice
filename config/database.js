
const { Sequelize } = require('sequelize');
module.exports = new Sequelize('khalid', 'postgres', 'khalid', {
  host: 'localhost',
  dialect:  'postgres'
}); 