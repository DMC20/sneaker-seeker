const router = require('express').Router();
const userRoutes = require('./users');
const dataRoutes = require('./data')
const shoeRoutes = require('./shoes')

router.use('/users', userRoutes);
router.use('/data', dataRoutes);
router.use('/shoes', shoeRoutes);

module.exports = router;