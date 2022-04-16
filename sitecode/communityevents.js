
/* Input Image Links with the format: https://drive.google.com/uc?export=view&id=XXX
XXX is the id extracted from the image that was uploaded to google drive */

// AJAX call
const request = new XMLHttpRequest();
request.open('GET', 'events.json');
request.send();
request.addEventListener('load', function(e){
  e.preventDefault();
  console.log(this.responseText)
  const data = JSON.parse(this.responseText);
  console.log(data);
  // Store the strings to call specific IDs
  var title;
  var image;
  var date;
  var location;

  // Make a list for each attribute to store the data
  var titles = [];
  var images = [];
  var dates = [];
  var locations = [];

  for (var i=1; i<=4; i++){
    console.log(i)
    title = data.events[i-1].name;
    image = data.events[i-1].image;
    date = data.events[i-1].date;
    location = data.events[i-1].location;
   
    iAttr = '#image' + i;
    tAttr = '#title' + i;
    dAttr = '#date' + i;
    lAttr = '#location' + i;

    $(iAttr).attr("src", image);
    $(tAttr).text(title); 
    $(dAttr).text(date);
    $(lAttr).text(location);

    titles.push(title);
    images.push(image);
    dates.push(date);
    locations.push(location);

  }
  return false;
});



/* Modal Functionality */

var exampleModal = document.getElementById('eventModal')

exampleModal.addEventListener('show.bs.modal', function (e) {
  // Button that triggered the modal
  var card = e.relatedTarget;
  // Extract info from data-bs-* attributes
  var eventNum = parseInt(card.getAttribute('data-bs-whatever'));

  // Select the modal's content
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalDate = exampleModal.querySelector('modal-date');
  var modalLocation = exampleModal.querySelector('modal-location');

  modalTitle.textContent = titles[eventNum - 1];
  modalDate.innerText = dates[eventNum - 1];
  modalLocation.innerText = locations[eventNum - 1];
})


