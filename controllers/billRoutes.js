const router = require('express').Router();
const { Bill } = require('../models');
const moment = require('moment');

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

        const billDue = bills.map(item => item.due_date);
        const dueDate = billDue.map(item => moment(item).format("Do MMM YYYY"))

        for (let i = 0; i < bills.length; i++) {
            bills[i].dueDate = dueDate[i];
        }
<<<<<<< HEAD

        res.render('bills', { bills, logged_in: req.session.logged_in });
=======
        
        res.render('bills', { bills });
>>>>>>> b53a9289ed94cdf46677c735b8b276c5a7487c4f
    } else {
        res.render("noAccount")
    }
    } catch (err) {
            console.log(err);
            res.status(500).json(err);
    }
});

module.exports = router;