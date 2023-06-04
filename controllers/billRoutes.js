const router = require('express').Router();
const { Bill } = require('../models');
const moment = require('moment');

router.get('/', async (req, res) => {
    try {
        const billData = await Bill.findAll({
            order: [
                ["due_date", 'ASC']
            ]
        });
        const bills = billData.map((bill) =>
            bill.get({ plain: true })
        );

        const billDue = bills.map(item => item.due_date);
        const dueDate = billDue.map(item => moment(item).format("Do MMM YYYY"))

        for (let i = 0; i < bills.length; i++) {
            bills[i].dueDate = dueDate[i];
        }

        res.render('bills', { bills });
    } catch (err) {
            console.log(err);
            res.status(500).json(err);
    }
});

module.exports = router;