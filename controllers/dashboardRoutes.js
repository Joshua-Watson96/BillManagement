const router = require('express').Router();
const { Bill, Category } = require('../models');
const moment = require('moment');

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

        const categoryNames = categoryTotals.map(item => item.category_name);
        const totalAmounts = categoryTotals.map(item => item.total_amount);

        const billData = await Bill.findAll({
            order: [
                ["due_date", 'ASC']
            ],
            limit: 5,
        });
        
        const bills = billData.map((bill) =>
            bill.get({ plain: true })
        );

        const billDue = bills.map(item => item.due_date);
        const dueDate = billDue.map(item => moment(item).format("Do MMM YYYY"))

        for (let i = 0; i < bills.length; i++) {
            bills[i].dueDate = dueDate[i];
        }

    
        res.render('dashboard', { categoryTotals, totalAmounts, categoryNames, bills });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
