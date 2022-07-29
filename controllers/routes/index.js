const router = require('express').Router();

// const apiRoutes = require('./api');
// const projectRoutes = require('./projectsRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
// router.use('/projects', projectRoutes);
// router.use('/contact-me,', contactMeRoutes)


module.exports = router;
