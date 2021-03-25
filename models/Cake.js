const { Model, DataTypes, INTEGER } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


Cake.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_type: {
            type: DataTypes.string,
            allowNull: false,

        },
        cake_sizes: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        cake_dough: {
            type: DataTypes.string,
            allowNull: false,
        },

        cake_flavors: {
            flavors_type: DataTypes.string,
            allowNull: false,
        },

        cake_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            isDecimal: true,            
        },

        cake_receipt: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },


    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    });

module.exports = Cake;



// flavors_type: ["Plum with Dulce de Leche", "Oreo", "Pineapple with coconut", "Brigadeiro", "Coconut",
//     "Black & White Chocolate", "Chocolate with Strawberry", "Chocolate with coconut", "Passion Fruit", "Passion Fruit w/ strawberry",
//     "Passion Fruit w / Ferreiro Rocher", "Strawberry", "Strawberry with Suspiro", "Peach", "Dark Forest", "Sonho de Valsa",
//     "Powder Milk with Ferreiro Rocher", "Powder Milk", "Ferrero Rocher", "Powder Milk with Strawberry", "Red Velvet with Lime"]