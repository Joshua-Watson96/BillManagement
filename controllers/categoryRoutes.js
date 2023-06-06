const router = require('express').Router();
const { Bill, Category } = require('../models');

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