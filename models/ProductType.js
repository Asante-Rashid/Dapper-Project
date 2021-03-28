const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProductType extends Model { }

ProductType.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        product_type: {
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
        modelName: 'productType',
    });

module.exports = ProductType;
