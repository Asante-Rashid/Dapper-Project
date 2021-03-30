const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Flavor extends Model {}

Flavor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        flavor_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dough_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        base_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isDecimal: true
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'flavor',
    });

module.exports = Flavor;
