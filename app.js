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
    inputForm.addEventListener('submit',function(e){
        document.getElementById('results').style.display = 'none';
        document.getElementById('loading').style.display = 'block';

        setTimeout(calculateLoan,2000);

        e.preventDefault();
    });
}

function calculateLoan(){
    var n;
    var i;
    n= years.value * 12;
    i = (interest.value)/100/12;
    // console.log('n='+ n +',i='+ i)
    // Monthly payment calculation
    let z= Math.pow((1+i),n);
    var monthly_payment =(((amount.value)*i*z)/(z-1)).toFixed(2);
    
    
    var total_payment =(  monthly_payment * years.value *12).toFixed(2);

    var total_interest =( total_payment - (amount.value)).toFixed(2);

    // RESULTS
    if(isFinite(monthly_payment)){
        monthlyPayment.placeholder = monthly_payment;
        totalPayment.placeholder = total_payment;
        totalInterest.placeholder = total_interest;
        //  SHOW RESULTS
        document.getElementById('results').style.display = 'block';
        // HIDE LOADING
        document.getElementById('loading').style.display = 'none';
    }else{
        showError('Please check your numbers.');
    }
    
  
    

}

function showError(error){

    //  HIDE RESULTS
    document.getElementById('results').style.display = 'none';
    // HIDE LOADING
    document.getElementById('loading').style.display = 'none';

    const card =document.querySelector('.card');
    const heading =document.querySelector('.heading');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';

    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv,heading)

    setTimeout(clearError,3000);
}
function clearError(){
    document.querySelector('.alert').remove();
}