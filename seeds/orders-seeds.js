const { Orders } = require('../models');


    //TODO link all the files to sync the orders database

const ordersData = [
    {
        customer_id: 1,
        user_id: 1,
        pickup_date: '2021-04-01',
        pickup_time: '10:00',
    },
    {
        customer_id: 2,
        user_id: 2,
        pickup_date: '2021-04-01',
        pickup_time: '13:00',
    },
    {
        customer_id: 3,
        user_id: 3,
        pickup_date: '2021-04-02',
        pickup_time: '15:00',
    },
    {
        customer_id: 4,
        user_id: 4,
        pickup_date: '2021-04-02',
        pickup_time: '09:00',
    },
];

const ordersCategories = () => Orders.bulkCreate(ordersData);

module.exports = ordersCategories;
