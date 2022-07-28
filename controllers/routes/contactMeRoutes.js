const router = require('express').Router();
const session = require('express-session');
const withAuth = require('../../utils/auth');


//- ☎️ CONTACT ME PAGE-- 
router.get('/', async (req, res) => {
  try {
    console.log("SESSION 🔓", req.session);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post('/', withAuth, async (req, res) => {
  try {
    console.log("SESSION 🔓", req.session);
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});








// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     console.log("DELETE ROUTE ☠️")
//     res.status(200).json(commentData);
//   } catch (err) {
//     console.log("DELETE ROUTE ☠️ERROR📛", err)
//     res.status(500).json(err);
//   }
// });

module.exports = router;
