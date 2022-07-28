const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./projectsRoutes');
const homeRoutes = require('./contactMeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/contact-me,', contactMeRoutes)


module.exports = router;
