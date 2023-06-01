const router = require('express').Router();
const { Bill, Category } = require('../models');

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

        res.render('categories', { categories });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;