const router = require('express').Router();
const newBill = require('../views')

//Get all categories and associated bills
router.get('/newBill', async (req, res) => {
    try { 
        // const billData = await Bill.findAll({})
        res.render('newBill', {newBill})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;