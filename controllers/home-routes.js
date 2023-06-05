const router = require("express").Router();
const { User, Bill, Category } = require("../models");

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signUp", (req, res) => {
  res.render("signUp");
});

//Get all categories and associated bills
router.get("/dashboard", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Bill,
          attributes: ["name", "amount", "due_date"],
          where: {user_id: req.session.user_id},
        },
      ],
    });
    const categories = categoryData.map((category) =>
      category.get({ plain: true })
      
    );
    console.log(categories)
    const billData = await Bill.findAll({
      where: { user_id: req.session.user_id },
      order: [["due_date", "ASC"]],
    });
    const bills = billData.map((bill) => bill.get({ plain: true }));
    console.log(bills)
    res.render("dashboard", {
      categories,
      bills,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
