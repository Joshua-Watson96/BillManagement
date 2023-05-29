const seedCategories = require('./category-seeds.js');
const seedSubcategories = require('./subcategory-seeds');
const seedBills = require('./bill-seeds');
const seedUsers = require('./user-seeds.js')

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedSubcategories();
    console.log('\n----- SUBCATEGORIES SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedBills();
    console.log('\n----- BILLS SEEDED -----\n');

    process.exit(0);
};

seedAll();