const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const billsRoutes = require('./billRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/bills', billsRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;

