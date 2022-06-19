module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
      M_name: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      actor: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      watched: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Movie;
  };
  