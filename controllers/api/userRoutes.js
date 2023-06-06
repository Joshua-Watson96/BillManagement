const router = require('express').Router();
const { Bill, User } = require('../../models');

// signup route to create new user
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userData.dataValues.id;
      req.session.name = userData.dataValues.name;

      res.status(200).json(userData);
      // res.render("login");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// finds user in database and compares to login details
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { name: req.body.name} });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
      res.render("login");
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: Bill,
          attributes: ['name', 'amount', 'due_date'],
        },
      ],
    });
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})