const { Flavor } = require('../models');


//TODO UPDATE ALL CAKE DESCRPITONS

const flavorData = [
    {
        name: 'Tres Leches',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Plum with Dulce de Leche',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Oreo',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Pineapple with coconut',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Brigadeiro',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Coconut',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Black & White Chocolate',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Chocolate with strawberry',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Chocolate with coconut',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Passion Fruit',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Passion Fruit with Strawberry',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Passion Fruit with Ferreiro Rocher',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Strawberry',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Strawberry with Suspiro',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Peach',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Dark Forest',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Sonho de Valsa',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: '36.00'
    },
    {
        name: 'Powder Milk with Ferreiro Rocher',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Ferrero Rocher',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Powder Milk with Strawberry',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Red Velvet with Lime',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        name: 'Powder Milk',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 46.00
    },
];

// console.log(flavorData);

const flavorCategories = () => Flavor.bulkCreate(flavorData);

module.exports = flavorCategories;

