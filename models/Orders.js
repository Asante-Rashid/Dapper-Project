const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');


class Orders extends Model { }

Orders.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'customer',
                key: 'id',
            },
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        pickup_date: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isDate: true
            },
        },

        pickup_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        base_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        additional_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },

        product_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
        modelName: 'orders',
    });

module.exports = Orders;
