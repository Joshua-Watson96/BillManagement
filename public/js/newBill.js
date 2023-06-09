const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function(event){
  event.preventDefault();
  console.log("blah blah blah");
  // Gets the bill type
  const billType = document.getElementById("billTypeId").value;
  // Get the name value
  const billName = document.getElementById("billNameId").value;
  // Get the amount value
  const billAmount = document.getElementById("billAmountId").value;
  // Get the due date value
  const billDueData = document.getElementById("billDueId").value;
        
  
  // add selected type to back-end with id
  let categoryId;
  switch (billType) {
    case "electricity":
      categoryId = 1;
      break;
    case "gas":
      categoryId = 2;
      break;
    case "internet":
      categoryId = 3;
      break;
    case "water":
      categoryId = 4;
      break;
    case "healthInsurance":
        categoryId = 5;
      break;
    case "homeInsurance":
        categoryId = 6;
      break;
    case "carInsurance":
        categoryId = 7;
      break;
    case "carRego":
        categoryId = 8;
      break;
      case "phone":
        categoryId = 9;
      break;
      case "schoolFee":
        categoryId = 10;
      break;
      case "councilRates":
        categoryId = 11;
      break;
      case "dogRego":
        categoryId = 12;
    default:
      categoryId = null;
  }
        
  const billData = {
    name: billName,
    category_id: categoryId,
    amount: billAmount,
    due_date: billDueData,
  }

  // adds bill to db
  fetch('/api/bills', {
    method: 'POST',
    body: JSON.stringify(billData),
    headers: {
      'Content-Type': 'application/json'
    },
    
  })
  .then(response => {
    if (response.ok) {
      console.log('Data saved successfully');
      alert("Bill Added")
    } else {
      console.error('Failed to save data');
    }
  })
  .catch(error => {
    console.error('Error', error);
  })
});


// On button click; clears all the values  
// Get a reference to the clear button
const clearBtn = document.getElementById("clearBtn");

// Add a click event listener to the clear button
clearBtn.addEventListener("click", function() {
  // Clear the input fields
  document.getElementById("billNameId").value = "";
  document.getElementById("billTypeId").value = "";
  document.getElementById("billAmountId").value = "";
  document.getElementById("billDueId").value = "";
});

  
