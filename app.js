var inputForm = document.getElementById('loan-form');

// UI Vars
var amount = document.getElementById('amount');
var interest = document.getElementById('interest');
var years = document.getElementById('years');
var monthlyPayment = document.getElementById('monthly-payment');
var totalPayment = document.getElementById('total-payment');
var totalInterest = document.getElementById('total-interest');

loadEventListeners();

function loadEventListeners(){
    inputForm.addEventListener('submit',calculateLoan);
}

function calculateLoan(e){
    var n;
    var i;
    n= years.value * 12;
    i = (interest.value)/100/12;
    // console.log('n='+ n +',i='+ i)
    // Monthly payment calculation
    let z= Math.pow((1+i),n);
    var monthly_payment =((amount.value)*i*z)/(z-1);
    // console.log(monthly_payment);

    var total_payment =  monthly_payment * years.value *12;
    // console.log(total_payment);

    var total_interest = total_payment - (amount.value)

    // RESULTS
    monthlyPayment.placeholder = monthly_payment;
    totalPayment.placeholder = total_payment;
    totalInterest.placeholder = total_interest;
  
    e.preventDefault();

}