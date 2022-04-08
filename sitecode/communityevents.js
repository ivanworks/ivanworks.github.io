console.log("I have entered the JS file")

// AJAX call
const request = new XMLHttpRequest();
request.open('GET', 'events.json');
request.send();
request.addEventListener('load', function(e){
  e.preventDefault();
  console.log(this.responseText)
  const data = JSON.parse(this.responseText);
  console.log(data);
  for (var i=1; i<=4; i++){
    console.log(i)
    title = '#title' + i;
    image = '#image' + i;
    date = '#date' + i;
    location = '#location' + i;

    $(image).attr("src", data.events[i-1].image);
    $(title).text(data.events[i-1].name); 
    $(date).text(data.events[i-1].date);
    $(location).text(data.events[i-1].location);
  }
});


