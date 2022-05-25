'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Brands.hasMany(models.Merchants, {
        foreignKey: 'brandId'
      });
      Brands.hasMany(models.Shifts, {
        foreignKey: 'brandId'
      });
      Brands.hasMany(models.Services, {
        foreignKey: 'brandId'
      });
      Brands.hasOne(models.Addresses, {
        foreignKey: 'brandId'
      });
      Brands.hasMany(models.Categories, {
        foreignKey: 'brandId'
      });
    }
  }
  Brands.init({
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    avarageTicket: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Brands',
  });
  return Brands;
};