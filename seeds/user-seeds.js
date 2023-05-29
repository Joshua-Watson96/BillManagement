const { User } = require('../models');

const userData = [
    {
        name: 'user01',
        password: '12345678',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;