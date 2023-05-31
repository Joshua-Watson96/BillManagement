const express = require('express'); //import express
const router  = express.Router(); 

const allBillsController = require('./all-bills'); 

router.post('/all-bills', allBillsController.newBill); 

module.exports = router; 