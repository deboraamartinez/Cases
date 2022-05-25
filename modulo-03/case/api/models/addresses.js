'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Addresses.belongsTo(models.Brands, {
        foreignKey: 'brandId'
      });
      Addresses.belongsTo(models.Merchants, {
        foreignKey: 'merchantId'
      })
    }
  }
  Addresses.init({
    country: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    streetName: DataTypes.STRING,
    number: DataTypes.INTEGER,
    postalCode: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Addresses',
  });
  return Addresses;
};