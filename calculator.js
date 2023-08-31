window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const loanAmount = document.getElementById("loan-amount");
  const loanYears = document.getElementById("loan-years");
  const loanRate = document.getElementById("loan-rate");
  loanAmount.setAttribute("value", 10000);
  loanYears.setAttribute("value", 20);
  loanRate.setAttribute("value", 4);
  const values = {
    amount: +(loanAmount.getAttribute("value")),
    years: +(loanYears.getAttribute("value")),
    rate: +(loanRate.getAttribute("value")),
  }
  const monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(currentUIValues);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principle = values.amount;
  const periodicInterestRate = (values.rate / 100) / 12;
  const numberOfPayments = Math.floor(values.years * 12);
  const monthlyPayment = (principle * periodicInterestRate)/(1 - ((1 + periodicInterestRate) ** (-numberOfPayments))); 
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = "$" + monthly;
}
