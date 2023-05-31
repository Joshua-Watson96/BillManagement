const { Bill } = require('../models');

const billData = [
    {
        name: 'Gas',
        due_date: "2023-06-10",
        amount: 71.75,
        category_id: 1,
        user_id: 1
    },
];

const seedBills = () => Bill.bulkCreate(billData);

module.exports = seedBills;
