function compute()
{
	principal = document.getElementById('principal').value;
    rate= document.getElementById('rate').value;
    years=document.getElementById('years').value;
    result=document.getElementById('result');

    var interest = principal * years * rate / 100.0;
    var year = new Date().getFullYear()+parseInt(years);
	
	if(principal < 0 || principal == null || principal == 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
	
	  result.innerHTML= `If you deposit <mark>${principal}</mark>,<br/>at an interest rate of <mark>${rate} %</mark>.<br/>You will receive an amount of <mark>${interest}</mark>,<br/>in the year <mark>${year}</mark>`;
}


  function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

	