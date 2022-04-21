
/* Modal Functionality */

var exampleModal = document.getElementById('teamModal')

exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var card = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var person = card.getAttribute('data-bs-whatever');
  var descr = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  console.log(person)
  if(person == 'Ivan Ramirez'){
    descr = "Ivan Ramirez graduated from San Francisco State, involved with sports and the community. Ivan has worked in the public sector for many years, from kids to adults. He wanted to make an impact to the community and wanting to see the city he fell in love with grow, he found a place within the city in where he is able to help the people within have a brighter future. Ivan resides in San Jose watching this city grow with a positive outlook and watching the citizens of the city grow and flourish.";
    console.log(descr)
  }
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyDescription = exampleModal.querySelector('.modal-description');
  modalTitle.textContent = person;
  modalBodyDescription.textContent = descr;

})