const flavorCategories = require('./flavor-seeds');
const productTypeCategories = require('./producttype-seeds');
const sizeCategories = require('./size-seeds');
// const ordersCategories = require('./orders-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await flavorCategories();
    console.log('\n----- FLAVOR CATEGORIES SEEDED -----\n');

    await productTypeCategories();
    console.log('\n----- PRODUCT_TYPE CATEGORIES SEEDED -----\n');
    
    await sizeCategories();
    console.log('\n----- SIZE CATEGORIES SEEDED -----\n');

    // await ordersCategories();
    // console.log('\n----- ORDERS CATEGORIES SEEDED -----\n');

    process.exit(0);
};

seedAll();
