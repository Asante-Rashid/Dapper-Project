const { Size } = require('../models');

const sizeData = [
    {
        size: '10',
        base_price: 36,
    },

    {
        size: '12',
        base_price: 42,
    },

    {
        size: '14',
        base_price: 52,
    },

    {
        size: '14',
        base_price: 52,
    },

    {
        size: '16',
        base_price: 79,
    },

    {
        size: '20',
        base_price: 130,
    },
];

const sizeCategories = () => Size.bulkCreate(sizeData);

module.exports = sizeCategories;
