'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Merchants.belongsTo(models.Brands, {
        foreignKey: 'brandId'
      })
      Merchants.hasMany(models.Shifts, {
        foreignKey: 'merchantId'
      });
      Merchants.hasMany(models.Services, {
        foreignKey: 'merchantId'
      });
      Merchants.hasOne(models.Addresses, {
        foreignKey: 'merchantId'
      });
      Merchants.hasMany(models.Categories, {
        foreignKey: 'merchantId'
      });
    }
  }
  Merchants.init({
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    avarageTicket: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Merchants',
  });
  return Merchants;
};