const userCategories = require('./user-seeds');
const flavorCategories = require('./flavor-seeds');
const productTypeCategories = require('./producttype-seeds');
const sizeCategories = require('./size-seeds');
const customerCategories = require('./customer-seeds')
// const ordersCategories = require('./orders-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await userCategories();
    console.log('\n----- USER CATEGORIES SEEDED -----\n');

    await flavorCategories();
    console.log('\n----- FLAVOR CATEGORIES SEEDED -----\n');

    await productTypeCategories();
    console.log('\n----- PRODUCT_TYPE CATEGORIES SEEDED -----\n');
    
    await sizeCategories();
    console.log('\n----- SIZE CATEGORIES SEEDED -----\n');
    
    await customerCategories();
    console.log('\n----- CUSTOMER CATEGORIES SEEDED -----\n');

    //TODO link all the files to sync the orders database

    // await ordersCategories();
    // console.log('\n----- ORDERS CATEGORIES SEEDED -----\n');

    process.exit(0);
};

seedAll();
