import { Sequelize } from "sequelize";

// Configuração do banco de dados
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'space_missions',
});

export default sequelize;

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  test: {
    dialect: 'sqlite',
    storage: './test-database.sqlite',
  },
  production: {
    dialect: 'sqlite',
    storage: './prod-database.sqlite',
  },
};


