
const express = require('express');
const { doc } = require('prettier');
const app = express();

app.use(express.json());

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function(){
        const billType = document.getElementById("billTypeId").value // Gets the bill type
        const billName = document.getElementById("billNameId").value; // Get the name value
        const billAmount = document.getElementById("billAmountId").value; // Get the amount value
        const billDueData = document.getElementById("billDueDate").value; // Get the due date value
        
  
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
          case "health-insurance":
              categoryId = 5;
            break;
            case "home-insurance":
              categoryId = 6;
            break;
            case "car-insurance":
              categoryId = 7;
            break;
            case "car-rego":
              categoryId = 8;
            break;
            case "phone-bill":
              categoryId = 9;
            break;
            case "school-fee":
              categoryId = 10;
            break;
            case "council-rates":
              categoryId = 11;
            break;
            case "dog-rego":
              categoryId = 12;
          default:
            categoryId = null;
        }
        const billData = {
          name: billName,
          category_id: billType,
          amount: billAmount,
          dueDate: billDueData,
        }
        console.log(billData);

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
          } else {
            console.error('Failed to save data');
          }
        })
        .catch(error => {
          console.error('Error', error);
        })
      });


// on button click; clears all the values  
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

  
