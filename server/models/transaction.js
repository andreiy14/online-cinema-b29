'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     transaction.belongsTo(models.user, {
        as: 'user',
        foreignKey: {
          name: 'idUser',
        },
      });
      transaction.belongsTo(models.film, {
        as: 'film',
        foreignKey: {
          name: 'idFilm',
        },
      });
      

    }
  }
  transaction.init({
    idUser: DataTypes.INTEGER,
    idFilm: DataTypes.INTEGER,
    image: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};