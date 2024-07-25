const { Sequelize } = require('sequelize');



const sequelize = new Sequelize(POSTGRES_URL="postgres://default:0Lm7FZHVBivE@ep-royal-firefly-a49bp312-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require");

const db = {
  sequelize,
  Sequelize,
};

module.exports = db;
