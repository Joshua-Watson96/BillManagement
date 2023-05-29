const router = require('express').Router();
const { Bill} = require('../../models');

//Endpoint '/api/bills'

//Create bill
router.post('/', async (req, res) => {
    try {
        const newBill = await Bill.create({
            name: req.body.name,
            due_date: req.body.due_date,
            amount: req.body.amount,
            category_id: req.body.category_id,
            // user_id: req.session.user_id,
            user_id: req.body.user_id
        });
        res.status(200).json(newBill);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;