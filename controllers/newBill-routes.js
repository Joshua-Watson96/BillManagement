const router = require('express').Router()

router.get('/', (req, res) => {
  if (req.session.logged_in) {
  res.render('newBill')
  } else {
    res.render("noAccount")
  }
})

module.exports = router;