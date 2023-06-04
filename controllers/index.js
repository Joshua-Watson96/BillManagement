const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const billRoutes = require('./billRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/bills', billRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
