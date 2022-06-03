'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shifts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shifts.belongsTo(models.Brands, {
        foreignKey: 'brandId'
      })
      Shifts.belongsTo(models.Merchants, {
        foreignKey: 'merchantId'
      })
    }
  }
  Shifts.init({
    dayOfWeek: DataTypes.STRING,
    startDateTime: DataTypes.TIME,
    finishDateTime: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Shifts',
  });
  return Shifts;
};