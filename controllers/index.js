const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const billRoutes = require('./billRoutes');
const categoryRoutes = require('./categoryRoutes');
const newBillRoutes = require('./newBill-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/bills', billRoutes);
router.use('/categories', categoryRoutes);
router.use('/newBill', newBillRoutes)


module.exports = router;
