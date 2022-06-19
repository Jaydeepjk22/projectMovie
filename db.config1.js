module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "welcome123",
    DB: "myMovies",//schema
    dialect: "mysql",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  