// config/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',       // Definindo o dialeto como SQLite
  storage: './database.sqlite',  // Caminho para o arquivo do banco de dados
});

export default sequelize;
