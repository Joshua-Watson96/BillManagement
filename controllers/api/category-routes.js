const router = require('express').Router();
const { Category } = require('../../models');

//Endpoint '/api/categories'

//Create categories
router.post('/', async (req, res) => {
    try {
        const newCategory = await Category.create({
            category_name: req.body.category_name,
        });
        res.status(200).json(newCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;