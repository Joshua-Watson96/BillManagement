const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('newBill')
})

module.exports = router;