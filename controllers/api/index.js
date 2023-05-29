const router = require('express').Router();
const billRoutes = require('./bill-routes');
const categoryRoutes = require('./category-routes');
const subcategoryRoutes = require('./subcategory-routes');

router.use('/bills', billRoutes);
router.use('/categories', categoryRoutes);
router.use('/subcategories', subcategoryRoutes);

module.exports = router;