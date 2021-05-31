'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  WorkList.init({
    Title: DataTypes.STRING,
    Description: DataTypes.STRING,
    Date: DataTypes.DATE,
    Tag: DataTypes.STRING,
    Status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'WorkList',
  });
  return WorkList;
};