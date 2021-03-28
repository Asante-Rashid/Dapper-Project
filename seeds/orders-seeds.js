const { Orders } = require('../models');


    //TODO link all the files to sync the orders database

const ordersData = [
    {
        customer_id: 1,
        user_id: 1,
        pickup_date: '2021-05-05',
        pickup_time: '13:00',
    },
];

const ordersCategories = () => Orders.bulkCreate(ordersData);

module.exports = ordersCategories;
