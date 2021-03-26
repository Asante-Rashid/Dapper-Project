const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');


class Size extends Model { }

Size.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        size: {
            type: DataTypes.INTEGER,
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
        modelName: 'size',
    });

module.exports = Size;
