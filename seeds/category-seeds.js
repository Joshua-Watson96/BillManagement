const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Electricity',
    },
    {
        category_name: 'Gas',
    },
    {
        category_name: 'Internet',
    },
    {
        category_name: 'Water',
    },
    {
        category_name: 'Health Insurance',
    },
    {
        category_name: 'Home Insurance',
    },
    {
        category_name: 'Car Insurance',
    },
    {
        category_name: 'Car Rego',
    },
    {
        category_name: 'Phone Bill',
    },
    {
        category_name: 'School Fee',
    },
    {
        category_name: 'Council Rates',
    },
    {
        category_name: 'Dog Rego',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;