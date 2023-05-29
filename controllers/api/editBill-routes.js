// require router with express
const router = require('express').Router()
// get the bill information from bill
const Bill = require('../../models/Bill')

// Edit a bill
router.put('/:id', async (req, res) => {
    try {
        const billData = await Bill.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!billData[0]) {
            res.status(404).json({ message: 'No bill with this id!'});
            return;
        }
        res.status(200).json(billData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;