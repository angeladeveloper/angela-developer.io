const { route } = require('./contactMeRoutes');

const router = require('express').Router();


router.get('/', (req, res) => {
  console.log("render homepage 🏠")
  res.render('homepage');
});


module.exports = router