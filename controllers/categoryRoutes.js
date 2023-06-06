const router = require('express').Router();
const { Bill, Category } = require('../models');
const moment = require("moment");

router.get('/', async (req, res) => {
    try {
        if (req.session.logged_in) {
        const categoryData = await Category.findAll({
            include: [
                {
                    model: Bill,
                    attributes: ['name', 'amount', 'due_date'],
                    where: { user_id: req.session.user_id },
                },
            ],
        });

        const categories = categoryData.map((category) =>
            category.get({ plain: true })
        );

        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            const bills = category.bills;

            for (let j = 0; j < bills.length; j++) {
                const bill = bills[j];
                // Access and modify the due_date property
                bill.due_date = moment(bill.due_date).format("Do MMM YYYY");
            }
        }

        res.render('categories', { categories, logged_in: req.session.logged_in});

    } else {
        res.render("noAccount")
    }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;