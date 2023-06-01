const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Set up the body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file with the form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle the form submission
app.post('/addNewBill', (req, res) => {
  const billType = req.body.billType;
  const billOption = req.body.billOption;

  let selectedElements = [];

  if (billType === 'homeVal') {
    if (billOption === 'electricity' || billOption === 'gas' || billOption === 'water' || billOption === 'internet') {
      selectedElements.push('homeId');
    }
  } else if (billType === 'insuranceVal') {
    if (billOption === 'homeInsurance' || billOption === 'carInsurance') {
      selectedElements.push('insuranceId');
    }
  } else if (billType === 'personalVal') {
    if (billOption === 'carRego' || billOption === 'phone') {
      selectedElements.push('personalId');
    }
  } else if (billType === 'educationVal') {
    if (billOption === 'schoolFee') {
      selectedElements.push('educationId');
    }
  } else if (billType === 'councilVal') {
    if (billOption === 'councilRates' || billOption === 'dogRego') {
      selectedElements.push('councilId');
    }
  }

  res.render('newBill', { selectedElements });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
