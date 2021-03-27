const { ProductType } = require('../models');

const productTypeData = [
    {
        product_type: 'Cake',
        base_price: 0,
    },

    {
        product_type: 'Pastries',
        base_price: 49.00,
    },
];

const productTypeCategories = () => ProductType.bulkCreate(productTypeData);

module.exports = productTypeCategories;
