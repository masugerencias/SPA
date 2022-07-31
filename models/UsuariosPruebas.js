const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const UsuariosPruebas = sequelize.define('usuario_pruebas', {
    id_usuario_pruebas: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fk_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fk_pruebas: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tarjeta: {
    type: Sequelize.BIGINT,
    allowNull: false,
  }, 
  dorsal: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  estado: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  }, 
});
module.exports = UsuariosPruebas;
