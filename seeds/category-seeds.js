const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Home',
    },
    {
        category_name: 'Car',
    },
    {
        category_name: 'Insurance',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;