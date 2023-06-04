// Sets the arrays for the billName dropdown value
const homeBill = [
  "Electricity", "Gas", "Water", "Internet"
]

const insuranceBill = [
  "Health Insurance", "Home Insurance", "Car Insurance"
]

const personalBill = [
  "Car Registration", "Phone Bill" 
]

const educationBill = [
  "School Fee", "Class Excursion"
]

const councilBill = [
  "Rates", "Dog Registration"
]

// sets the variables for billName and billType
const billType = document.getElementById("billTypeId")
const billName = document.getElementById("billNameId");


// function to show selected options in the billType dropdown
function getOptions() {
billType.innerHTML = "";  
const value = billName.value;
const text = billName.options[billName.selectedIndex].text;
console.log(value, text);

// If home value is selected; show homeBill array
if (value === 'homeVal'){
for (let i = 0; i < homeBill.length; i++) {
  console.log(homeBill[i]);
  const optionEl = document.createElement("option")
  optionEl.textContent = homeBill[i]
  billType.append(optionEl)
}
//  if insurance value is selected; show insuranceBill array
} else if (value === 'insuranceVal'){
  for (let i = 0; i < insuranceBill.length; i++) {
    const optionEl = document.createElement("option")
    optionEl.textContent = insuranceBill[i]
    billType.append(optionEl)
    
  }
  // if personal value is selected; show personalBill array
} else if (value === 'personalVal'){
  for (let i = 0; i < personalBill.length; i++) {
    const optionEl = document.createElement("option")
    optionEl.textContent = personalBill[i]
    billType.append(optionEl)
    
  }
  // if education value is selected; show educationBill array
} else if (value === 'educationVal'){
for (let i = 0; i < educationBill.length; i++) {
  const optionEl = document.createElement("option")
  optionEl.textContent = educationBill[i]
  billType.append(optionEl)
}
// if council value is selected; show councilBill array
} else if (value === 'councilVal'){
  for (let i = 0; i < councilBill.length; i++) {
    const optionEl = document.createElement("option")
    optionEl.textContent = councilBill[i]
    billType.append(optionEl)
    
  }
}
}

function saveBill(){
  saveBtn = document.getElementById("saveBtn")
}
// on change in value in the dropdown box, the function is ran
billName.onchange = getOptions;
// runs the function
getOptions();