const router = require('express').Router();
const { Bill, Category } = require('../models');

// router.get('/dashboard', (req, res) => {
//     res.render('dashboard')
// });

router.get('/dashboard', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: [
                {
                    model: Bill,
                    attributes: ['name', 'amount'],
                },
            ],
        });
        const categories = categoryData.map((category) =>
            category.get({ plain: true })
        );

        res.render('dashboard', { categories });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;