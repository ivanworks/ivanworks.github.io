

const scriptURL = 'https://script.google.com/macros/s/AKfycbzjG0EBs2w6U_a_Lt9gz1ymPo4WWJX5Btnh8-QURMxhDMYnGNAfpCgTLCA31Yx1tmlsyw/exec'
const form = document.querySelector("form");

/* inputs */
const name = document.querySelector("#employerName");
const email = document.querySelector("#employerEmail");
const company = document.querySelector("#companyName");
const why = document.querySelector("#why");
const numInterns = document.querySelector("#numInterns");


/* event listener */
form.addEventListener('submit', function(e){
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body:new FormData(form)})
		.then(response => (response.json()))
        .then(response => {
        	name.value = '';
        	email.value = '';
        	company.value = '';
        	why.value = '';
        	numInterns.value = '';
        	alert("Application Successfully Submitted! We will contact you soon.");
    	})
        .catch(error => alert('Error!', error.message))
});