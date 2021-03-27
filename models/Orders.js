const { Model, DataTypes } = require('sequelize');
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
            references: {
                model: 'User',
                key: 'id',
            },
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
            validate: {
                isDate: true
            },
        },

        base_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isDecimal: true,
            },
            references: {
                model: 'Flavor',
                key: 'id',
            },
        },

        additional_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isDecimal: true,
            },
             references: {
                model: 'Size',
                key: 'id',
            },
        },

        product_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ProductType',
                key: 'id',
            },
        },

        size_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Size',
                key: 'id',
            },
        },

        flavor_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Flavor',
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
