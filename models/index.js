const User = require('./User');
const ProductType = require('./ProductType');
const Customer = require('./Customer');
// ! Customer case is omportant
const Size = require('./Size');
const Flavor = require('./Flavor');
const Orders = require('./Orders');
const OrderItem = require('./OrderItem')


Orders.hasMany(OrderItem, {
    foreignKey: 'order_id',
});

OrderItem.belongsTo(Orders, {
    foreignKey: 'order_id',
});

Orders.belongsTo(Customer, {
    foreignKey: 'customer_id',
});

Customer.hasMany(Orders, {
    foreignKey: 'customer_id',
});

Orders.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Orders, {
    foreignKey: 'user_id',
});

// OrderItem.hasOne(Flavor, {
//     foreignKey: 'flavor_id',
// });

// OrderItem.hasOne(ProductType, {
//     foreignKey: 'product_type_id',
// });

// OrderItem.hasOne(Size, {
//     foreignKey: 'size_id',
// });


module.exports = {
    User,
    ProductType,
    Customer,
    Size,
    Flavor,
    Orders,
    OrderItem
};

