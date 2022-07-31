const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const Prueba = sequelize.define('pruebas', {
    id_prueba: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fechainicio: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  fechafin: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  nombreprueba: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  precio: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }, 
  tipo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descripcion: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  participantes_max: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }, 
});
module.exports = Prueba;
