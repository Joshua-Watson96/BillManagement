const { Subcategory } = require('../models');

const subcategoryData = [
    {
        subcategory_name: 'Electricity',
        category_id: 1,
    },
    {
        subcategory_name: 'Gas',
        category_id: 1,
    },
    {
        subcategory_name: 'Rent',
        category_id: 1,
    },
    {
        subcategory_name: 'Mortgage',
        category_id: 1,
    },
    {
        subcategory_name: 'Water',
        category_id: 1,
    },
    {
        subcategory_name: 'Rego',
        category_id: 2,
    },
];

const seedSubcategories = () => Subcategory.bulkCreate(subcategoryData);

module.exports = seedSubcategories;