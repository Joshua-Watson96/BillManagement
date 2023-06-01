const router = require('express').Router();
const { Bill, Category } = require('../models');
const sequelize = require('../config/connection');

//Get all categories and associated bills
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: [
                {
                    model: Bill,
                    attributes: ['name', 'amount', 'due_date'],
                },
            ],
        });
    
        const categories = categoryData.map((category) =>
            category.get({ plain: true })
        );

        const categoryTotals = categories.map(category => {
            const totalAmount = category.bills.reduce((sum, bill) => {
                return sum + parseInt(bill.amount, 10);
            }, 0);

            return {
                category_name: category.category_name,
                total_amount: totalAmount
            };
        });
        console.log(categoryTotals);

        const categoryNames = categoryTotals.map(item => item.category_name);
        const totalAmounts = categoryTotals.map(item => item.total_amount);

        console.log(categoryNames)
        console.log(totalAmounts)

        const billData = await Bill.findAll({
            order: [
                ["due_date", 'ASC']
            ],
            limit: 5,
        });
        
        const bills = billData.map((bill) =>
            bill.get({ plain: true })
        );
    
        res.render('dashboard', { categoryTotals, totalAmounts, categoryNames, bills});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
