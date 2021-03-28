const { User } = require('../models');

const usersData = [
  {
    "firstName": "Jack",
    "lastName": "Hughes",
    "email": "jack@email.com",
    "password": "pass1234",
    "role": "3",
    "isAdmin": "true"
  },
  {
    "firstName": "Alan",
    "lastName": "Smith",
    "email": "alan@email.com",
    "password": "pass1234",
    "role": "2",
    "isAdmin": "true"
  },
  {
    "firstName": "Chris",
    "lastName": "Roberts",
    "email": "chris@email.com",
    "password": "pass1234",
    "role": "1",
    "isAdmin": "false"
  },
  {
    "firstName": "Abby",
    "lastName": "Hope",
    "email": "abby@email.com",
    "password": "pass1234",
    "role": "1",
    "isAdmin": "false"
  },
  {
    "firstName": "Susan",
    "lastName": "Hart",
    "email": "susan@email.com",
    "password": "pass1234",
    "role": "0",
    "isAdmin": "false"
  },
  {
    "firstName": "Kelly",
    "lastName": "Pope",
    "email": "kelly@email.com",
    "password": "pass1234",
    "role": "0",
    "isAdmin": "false"
  },
    {
    "firstName": "Harry",
    "lastName": "Brooks",
    "email": "harry@email.com",
    "password": "pass1234",
    "role": "0",
    "isAdmin": "false"
  },
  {
    "firstName": "Linda",
    "lastName": "Cooper",
    "email": "linda@email.com",
    "password": "pass1234",
    "role": "0",
    "isAdmin": "false"
  },
];

const userCategories = () => User.bulkCreate(usersData);

module.exports = userCategories;