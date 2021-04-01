const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class OrderItem extends Model { }

OrderItem.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'orders',
                key: 'id',
            },
        },

        product_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'productType',
                key: 'id',
            },
        },

        size_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'size',
                key: 'id',
            },
        },

        flavor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'flavor',
                key: 'id',
            },
        },
        
        pickup_date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true
            },
        },

        pickup_time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true
            },
        },

        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        base_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },

        additional_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },

        photo_link: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        notes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'orderitem',
    });

module.exports = OrderItem;
