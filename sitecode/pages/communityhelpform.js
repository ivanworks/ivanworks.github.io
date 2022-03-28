

const scriptURL = 'https://script.google.com/macros/s/AKfycbywb1fvhKhvX1hOCtBGe18NgAKaBZn6E0INoI7ElMpT-E_3yNDXdMMohrlYYNE5xHyc/exec'
const form = document.querySelector("form");

/* inputs */
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phoneNumber");
const age = document.querySelector("#age");
const resume = document.querySelector("#resume");


/* event listener */
form.addEventListener('submit', function(e){
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body:new FormData(form)})
		.then(response => (response.json()))
        .then(response => {
        	name.value = '';
        	email.value = '';
        	phoneNumber.value = '';
        	age.value = '';
        	resume.value = '';
        	alert("Thanks, we will contact you soon.");
    	})
        .catch(error => alert('Error!', error.message))
});

