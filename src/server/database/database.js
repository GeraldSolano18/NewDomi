import Sequelize from 'sequelize';

// eslint-disable-next-line no-new
const sequelize = new Sequelize(
  'postgres',
  'postgres',
  'password',
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false,

  },

);

module.exports = sequelize;

