const router = require('express').Router();
const { Bill } = require('../models');
const moment = require('moment');

// gets all bill associated with user
router.get('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
        const billData = await Bill.findAll({
            where: { user_id: req.session.user_id },
            order: [
                ["due_date", 'ASC']
            ]
        });
        const bills = billData.map((bill) =>
            bill.get({ plain: true })
        );

        console.log(bills)

        const billDue = bills.map(item => item.due_date);
        const dueDate = billDue.map(item => moment(item).format("Do MMM YYYY"))

        for (let i = 0; i < bills.length; i++) {
            bills[i].dueDate = dueDate[i];
        }

        res.render('bills', { bills, logged_in: req.session.logged_in });

    } else {
        // render if user is not signed in
        res.render("noAccount")
    }
    } catch (err) {
            console.log(err);
            res.status(500).json(err);
    }
});

module.exports = router;