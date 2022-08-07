

const scriptURL = 'https://script.google.com/macros/s/AKfycbwuoyVueJgU_-3IlZ4EXZDglTErFK2Z9aIsfpP7KDTpmbWObIuKDnv5SLejzZ1Kx44jDA/exec'
const form = document.querySelector("form");

/* inputs */
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const middleName = document.querySelector("#middleName");
const dob = document.querySelector("#dob");
const email = document.querySelector("#email");
const gender = document.querySelector("#gender");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const zip = document.querySelector("#zip");
const homephone = document.querySelector("#homephone");
const cellphone = document.querySelector("#cellphone");
const contactName = document.querySelector("#contactName");
const relation = document.querySelector("#relation");
const contactPhone = document.querySelector("#contactPhone");
const auth = document.querySelector("#auth");
const ethnicity = document.querySelector("#ethnicity");
const CalFresh = document.querySelector("#CalFresh");
const lunch = document.querySelector("#lunch");
const CalWorks = document.querySelector("#CalWorks");
const pregnant = document.querySelector("#pregnant");
const language = document.querySelector("#language");
const engSkills = document.querySelector("#engSkills");
const homeless = document.querySelector("#homeless");
const foster = document.querySelector("#foster");
const pathway = document.querySelector("#pathway");
const learnCareers = document.querySelector("#learnCareers");
const criminal = document.querySelector("#criminal");
const school = document.querySelector("#school");
const hs = document.querySelector("#hs");
const stuID = document.querySelector("#stuID");
const gradYear = document.querySelector("#gradYear");
const howSJWorks = document.querySelector("#howSJWorks");


/* event listener */
form.addEventListener('submit', function(e){
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body:new FormData(form)})
		.then(response => (response.json()))
        .then(response => {
        	firstName.value = '';
        	lastName.value = '';
        	middleName.value = '';
        	dob.value = '';
            gender.value='';
        	email.value = '';
        	address.value = '';
        	city.value = '';
        	zip.value = '';
        	homephone.value = '';
        	cellphone.value = '';
            contactName.value = '';
        	relation.value = '';
        	contactPhone.value = '';
        	auth.value = '';
        	ethnicity.value = '';
        	CalFresh.value = '';
        	lunch.value = '';
        	CalWorks.value = '';
        	pregnant.value = '';
            language.value = '';
        	engSkills.value = '';
        	homeless.value = '';
        	foster.value = '';
        	pathway.value = '';
        	learnCareers.value = '';
        	criminal.value = '';
        	school.value = '';
        	hs.value = '';
            stuID.value = '';
            gradYear.value = '';
            howSJWorks.value = '';

        	alert("Application Successfully Submitted! We will contact you soon.");
    	})
        .catch(error => alert('Error!', error.message))
});

