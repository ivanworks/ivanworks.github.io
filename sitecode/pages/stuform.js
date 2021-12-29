

const scriptURL = 'https://script.google.com/macros/s/AKfycbyHPH5OTZxAcGkbqn--Jyr-hJQ03z138gxa3LBBTCb5hd4fFNUfHqtpYTa-5zcCdMGa/exec'
const form = document.querySelector("form");

/* inputs */
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const hs = document.querySelector("#hs");
const grade = document.querySelector("#grade");
const pathway = document.querySelector("#pathway");
const numClasses = document.querySelector("#numClasses");
const why = document.querySelector("#why");
const teacher = document.querySelector("#teacher");
const teacherEmail = document.querySelector("#teacherEmail");


/* event listener */
form.addEventListener('submit', function(e){
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body:new FormData(form)})
		.then(response => (response.json()))
        .then(response => {
        	name.value = '';
        	email.value = '';
        	hs.value = '';
        	grade.value = '';
        	pathway.value = '';
        	numClasses.value = '';
        	why.value = '';
        	teacher.value = '';
        	teacherEmail.value = '';
        	alert("Application Successfully Submitted! We will contact you soon.");
    	})
        .catch(error => alert('Error!', error.message))
});

