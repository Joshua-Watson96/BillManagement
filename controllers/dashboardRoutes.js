const router = require("express").Router();
const { Bill, Category } = require("../models");
const moment = require("moment");
const e = require("express");

//Get all categories and associated bills
router.get("/", async (req, res) => {
    try {
        if (req.session.logged_in) {
      const categoryData = await Category.findAll({
        include: [
          {
            model: Bill,
            attributes: ["name", "amount", "due_date"],
            where: { user_id: req.session.user_id },
          },
        ],
      });

      const categories = categoryData.map((category) =>
        category.get({ plain: true })
      );

      const categoryTotals = categories.map((category) => {
        const totalAmount = category.bills.reduce((sum, bill) => {
          return sum + parseInt(bill.amount, 10);
        }, 0);

        return {
          category_name: category.category_name,
          total_amount: totalAmount,
        };
      });

      const categoryNames = categoryTotals.map((item) => item.category_name);
      const totalAmounts = categoryTotals.map((item) => item.total_amount);

      const billData = await Bill.findAll({
        where: { user_id: req.session.user_id },
        order: [["due_date", "ASC"]],
        limit: 5,
      });

      const bills = billData.map((bill) => bill.get({ plain: true }));

      const billDue = bills.map((item) => item.due_date);
      const dueDate = billDue.map((item) => moment(item).format("Do MMM YYYY"));

      for (let i = 0; i < bills.length; i++) {
        bills[i].dueDate = dueDate[i];
      }

      res.render("dashboard", {
        categoryTotals,
        totalAmounts,
        categoryNames,
        bills,
        logged_in: req.session.logged_in
      });
        } else {
            res.render("noAccount")
        }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    } 
});

module.exports = router;
