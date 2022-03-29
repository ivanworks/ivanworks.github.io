
/* Modal Functionality */

var exampleModal = document.getElementById('teamModal')

exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var card = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var person = card.getAttribute('data-bs-whatever');
  console.log(person)
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyDescription = exampleModal.querySelector('modal-description');

  modalTitle.textContent = person;
  modalBodyDescription.innerText = person;
})