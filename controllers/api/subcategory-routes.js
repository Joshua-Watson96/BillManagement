const router = require('express').Router();
const { Subcategory } = require('../../models');

//Endpoint '/api/subcategories'

//Create subcategories
router.post('/', async (req, res) => {
    try {
        const newSubcategory = await Subcategory.create({
            subcategory_name: req.body.subcategory_name,
            category_id: req.body.category_id
        });
        res.status(200).json(newSubcategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;