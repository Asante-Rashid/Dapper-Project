const { Orders } = require('../models');


    //TODO link all the files to sync the orders database

const ordersData = [
    {
        pickup_date: '2021-11-05',
        pickup_time: '13:00:00',
        photo_link: 'photo link goes here',
        notes: 'cake with more strawberries on the top'
    },
];

const ordersCategories = () => Orders.bulkCreate(ordersData);

module.exports = ordersCategories;
