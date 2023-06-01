const router = require('express').Router();
const { Bill } = require('../models');

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

        res.render('bills', { bills });
            } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
});

module.exports = router;