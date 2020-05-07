const Sequelize = require('sequelize');

module.exports = new Sequelize('blog', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });

  