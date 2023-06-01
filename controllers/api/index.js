const router = require('express').Router();
const userRoutes = require('./userRoutes')
const billRoutes = require('./bill-routes');
const categoryRoutes = require('./category-routes');
const subcategoryRoutes = require('./subcategory-routes');

router.use('/bills', billRoutes);
router.use('/categories', categoryRoutes);
router.use('/subcategories', subcategoryRoutes);
router.use('/users', userRoutes);

module.exports = router;