import Sequelize from 'sequelize';
import sequelize from '../database/database';

const Persona = sequelize.define('persona', {
  idPersona: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.TEXT,
  },
  apellido: {
    type: Sequelize.TEXT,
  },
  cedula: {
    type: Sequelize.TEXT,
  },
}, {
  timestamps: false,
});
export default Persona;
