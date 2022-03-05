'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      film.belongsTo(models.category, {
        as: 'categories',
        foreignKey: {
          name: 'category',
        },
      });
    }
  }
  film.init({
    title: DataTypes.STRING,
    category: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    linkfilm: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'film',
  });
  return film;
};