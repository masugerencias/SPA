const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const Usuario = sequelize.define('usuarios', {
  id_usuario: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apellido: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  contrasena: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  empleado: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});
module.exports = Usuario;
