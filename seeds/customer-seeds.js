const { Customer } = require('../models');

const customerData = [
    {
        firstName: 'Bruce',
        lastName: 'Wayne',
        phoneNumber: 6780001111,
        email: 'wayne@batman.com',
        addrLine1: '1234 Street Road',
        addrLine2: 'Apt 1010',
        city: 'Atlanta',
        state: 'Georgia',
        zipCode: 30090,
    },
    {
        firstName: 'Robin',
        lastName: 'Wayne',
        phoneNumber: 6780002222,
        email: 'robin@batman.com',
        addrLine1: '1234 Street Road',
        addrLine2: 'Apt 1020',
        city: 'Atlanta',
        state: 'Georgia',
        zipCode: 30090,
    },
    {
        firstName: 'Gandalf',
        lastName: 'Gray',
        phoneNumber: 6780003333,
        email: 'gandalf@thegray.com',
        addrLine1: '1234 Street Road',
        addrLine2: 'Apt 1030',
        city: 'Atlanta',
        state: 'Georgia',
        zipCode: 30090,
    },
    {
        firstName: 'Aragorn',
        lastName: 'Elessar',
        phoneNumber: 6780004444,
        email: 'aragorn@lor.com',
        addrLine1: '1234 Street Road',
        addrLine2: 'Apt 1010',
        city: 'Atlanta',
        state: 'Georgia',
        zipCode: 30090,
    },
];

const customerCategories = () => Customer.bulkCreate(customerData);

module.exports = customerCategories;
