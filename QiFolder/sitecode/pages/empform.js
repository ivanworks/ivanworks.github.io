

const scriptURL = 'https://script.google.com/macros/s/AKfycbzjG0EBs2w6U_a_Lt9gz1ymPo4WWJX5Btnh8-QURMxhDMYnGNAfpCgTLCA31Yx1tmlsyw/exec'
const form = document.querySelector("form");

/* inputs */
const name = document.querySelector("#employerName");
const email = document.querySelector("#employerEmail");
const company = document.querySelector("#companyName");
const how = document.querySelector("#how");
const numInterns = document.querySelector("#numInterns");
const sector = document.querySelector("#sector");


/* event listener */
form.addEventListener('submit', function(e){
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body:new FormData(form)})
		.then(response => (response.json()))
        .then(response => {
        	name.value = '';
        	email.value = '';
        	company.value = '';
        	how.value = '';
        	numInterns.value = '';
        	sector.value = '';
        	alert("Application Successfully Submitted! We will contact you soon.");
    	})
        .catch(error => alert('Error!', error.message))
});

