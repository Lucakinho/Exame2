// testConnection.js
import sequelize from './config/database.js';  // Ajuste o caminho conforme necessário

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida!');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
