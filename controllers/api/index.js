const router = require('express').Router();
const billRoutes = require('./bill-routes');
const categoryRoutes = require('./category-routes');
const subcategoryRoutes = require('./subcategory-routes');
const editBillRoutes = require('./editBill-routes')

router.use('/bills', billRoutes);
router.use('/categories', categoryRoutes);
router.use('/subcategories', subcategoryRoutes);
router.use('/editBill', editBillRoutes);

module.exports = router;