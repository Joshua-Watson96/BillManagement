const router = require("express").Router();
const { Bill } = require("../../models");

//Endpoint '/api/bills'

//Get all bills
router.get("/", async (req, res) => {
  try {
    const billData = await Bill.findAll();
    res.status(200).json(billData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Create bill
router.post("/", async (req, res) => {
  try {
    if (req.session.logged_in) {
      const newBill = await Bill.create({
        name: req.body.name,
        due_date: req.body.due_date,
        amount: req.body.amount,
        category_id: req.body.category_id,
        user_id: req.session.user_id,
        // user_id: req.body.user_id
      });
      res.status(200).json(newBill);
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//Update bill by id
router.put("/:id", async (req, res) => {
  try {
    const billData = await Bill.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!billData[0]) {
      res.status(404).json({ message: "No bill with this id!" });
      return;
    }
    res.status(200).json(billData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete bill by id
router.delete("/:id", async (req, res) => {
  try {
    const billData = await Bill.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(billData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
