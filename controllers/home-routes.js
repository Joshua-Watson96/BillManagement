const router = require('express').Router();
const { Bill, Category } = require('../models');

// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//     });

//     const user = userData.get({ plain: true });

//     res.render('dashboard', {
      
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signUp', (req, res) => {
  res.render('signUp');
});



//Get all categories and associated bills
router.get('/dashboard', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: [
                {
                    model: Bill,
                    attributes: ['name', 'amount', 'due_date'],
                },
            ],
        });
        const categories = categoryData.map((category) =>
            category.get({ plain: true })
        );

        const billData = await Bill.findAll({
            order: [
                ["due_date", 'ASC']
            ]
        });
        const bills = billData.map((bill) =>
            bill.get({ plain: true })
        );

        res.render('dashboard', { categories, bills });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})




module.exports = router;