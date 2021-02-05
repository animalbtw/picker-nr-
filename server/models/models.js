const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Hero = sequelize.define('hero', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  feature: {type: DataTypes.STRING, allowNull: false},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
  img: {type: DataTypes.STRING, allowNull: false }
})

const FeatureType = sequelize.define('feature_type', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  feature_type: { type: DataTypes.STRING, allowNull: false, unique: true }
})

FeatureType.hasMany(Hero)
Hero.belongsTo(FeatureType)

module.exports = {
  Hero,
  FeatureType
}