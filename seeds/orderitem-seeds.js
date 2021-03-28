const { OrderItem } = require('../models');


//TODO link all the files to sync the orders database

const orderItemData = [
    {
    order_id: 1,
    product_type_id: 1,
    size_id: 1,
    flavor_id: 1,
    additional_price: 10,
    quantity: 1,
    base_price: 36.00,
    photo_link: 'PHOTO LINK GOES HERE',
    notes: 'cake info goes here',
    },
];

const orderItemCategories = () => OrderItem.bulkCreate(orderItemData);

module.exports = orderItemCategories;
