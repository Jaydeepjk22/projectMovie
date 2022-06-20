const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false, //to override minute errors while running the applicaton

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

//sequelize the constructor
db.Sequelize = Sequelize;

//sequelize the instance
db.sequelize = sequelize;

//table name
db.movies = require("./movie.model.js")(sequelize, Sequelize);

module.exports = db;
