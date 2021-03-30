const { Flavor } = require('../models');


//TODO UPDATE ALL CAKE DESCRPITONS

const flavorData = [
    {
        flavor_name: 'Tres Leches',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Plum with Dulce de Leche',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Oreo',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Pineapple with coconut',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Brigadeiro',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Coconut',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Black & White Chocolate',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Chocolate with strawberry',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Chocolate with coconut',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Passion Fruit',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Passion Fruit with Strawberry',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Passion Fruit with Ferreiro Rocher',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Strawberry',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Strawberry with Suspiro',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Peach',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Dark Forest',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Sonho de Valsa',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: '36.00'
    },
    {
        flavor_name: 'Powder Milk with Ferreiro Rocher',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Ferrero Rocher',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Powder Milk with Strawberry',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Red Velvet with Lime',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 36.00
    },
    {
        flavor_name: 'Powder Milk',
        description: 'Cake made with three different types of milk',
        dough_type: 'Vanilla',
        base_price: 46.00
    },
];

// console.log(flavorData);

const flavorCategories = () => Flavor.bulkCreate(flavorData);

module.exports = flavorCategories;

