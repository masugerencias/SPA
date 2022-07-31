const mysql = require('mysql');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('proyectspa', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  define: {
    timestamps: false
},
logging: false
});
sequelize
  .authenticate()
  .then(() => {
    
    console.log('MySQL ok');
  })
  .catch((err) => {
    
  });
module.exports = sequelize;