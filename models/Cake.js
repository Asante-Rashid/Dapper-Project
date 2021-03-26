const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');


class Cake extends Model {}

Cake.init(
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

        cake_size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        cake_dough: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cake_flavors: {
            type: DataTypes.STRING,
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

        cake_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cake',
    });

module.exports = Cake;



// // flavors_type: ["Plum with Dulce de Leche", "Oreo", "Pineapple with coconut", "Brigadeiro", "Coconut",
// //     "Black & White Chocolate", "Chocolate with Strawberry", "Chocolate with coconut", "Passion Fruit", "Passion Fruit w/ strawberry",
// //     "Passion Fruit w / Ferreiro Rocher", "Strawberry", "Strawberry with Suspiro", "Peach", "Dark Forest", "Sonho de Valsa",
// //     "Powder Milk with Ferreiro Rocher", "Powder Milk", "Ferrero Rocher", "Powder Milk with Strawberry", "Red Velvet with Lime"]