document.addEventListener('DOMContentLoaded', function() {
    const calculate = document.getElementById('calculate');
    const amount = document.getElementById('amount');
    const term = document.getElementById('term');
    const rate = document.getElementById('rate');
    const repayment = document.getElementById('repayment');
    const interest = document.getElementById('interest');
    const input = document.querySelector('input');
    const boxRepayment = document.getElementById('box-repayment');
    const boxInterest = document.getElementById('box-interest');
    const results = document.querySelector('.results');
    const clearAll = document.getElementById('clear')
  

  


    calculate.onclick = ()=> {

      if(input.value.trim() === '' || repayment.checked === false && interest.checked === false ) {
        amount.style.border = "#ff2851 solid 2px";
        term.style.border = "#ff2851 solid 2px";
        rate.style.border = "#ff2851 solid 2px";
        boxRepayment.style.border = "#ff2851 solid 2px";
        boxInterest.style.border = "#ff2851 solid 2px";
        
        
        
      } else {
        
        amount.style.border = "black solid 2px";
        term.style.border = "black solid 2px";
        rate.style.border = "black solid 2px";
        boxRepayment.style.border = "black solid 2px";
        boxInterest.style.border = "black solid 2px";
        results.innerHTML = "<h3>Your results</h3>" + "<span>Your results are shown below based on the information you provided.To adjust the results, edit the form and click “calculate repayments” again.</span>" + "<div><h5>Your monthly repayments</h5><hr>" + `<h1>${amount.value * term.value}</h1>` + "<h5>Total you'll repay over the term</h5>" + `<h1>${amount.value * term.value * rate.value}</h1>` + "</div> "


      }

      if(repayment.checked === true)  {
        
        results.innerHTML = "<h3>Your results</h3>" + "<span>Your results are shown below based on the information you provided.To adjust the results, edit the form and click “calculate repayments” again.</span>" + "<div><h5>Your monthly repayments</h5>" + `<h1> £${amount.value * term.value}</h1><hr>` + "<h5>Total you'll repay over the term</h5>" + `<h4> £${amount.value * term.value }</h4>` + "</div> ";
        boxRepayment.style.backgroundColor = 'hsl(61, 70%, 52%)';


      } 
      if(interest.checked === true) {
        
        results.innerHTML = "<h3>Your results</h3>" + "<span>Your results are shown below based on the information you provided.To adjust the results, edit the form and click “calculate repayments” again.</span>" + "<div><h5>Your monthly repayments</h5>" + `<h1> £${amount.value * term.value}</h1><hr>` + "<h5>Total you'll repay over the term</h5>" + `<h4> £${amount.value * term.value * rate.value}</h4>` + "</div> ";
        boxInterest.style.backgroundColor = 'hsl(61, 70%, 52%)';

      }



    }
  
  clearAll.onclick = () => {
    input.value = '';
    term.value = '';
    rate.value = '';
    
  }
})