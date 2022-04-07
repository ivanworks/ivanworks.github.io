console.log("I have entered the JS file")

/* Define Target file */
const source = 'events.json';

/* Define the fields to be updated */

/* Info for Event 1 */
const title1 = document.querySelector('#title1')
const image1 = document.querySelector('#image1')
const date1 = document.querySelector('#date1')
const location1 = document.querySelector('#location1')

/* Info for Event 2 */
const title2 = document.querySelector('#title2')
const image2 = document.querySelector('#image2')
const date2 = document.querySelector('#date2')
const location2 = document.querySelector('#location2')

/* Info for Event 3 */
const title3 = document.querySelector('#title3')
const image3 = document.querySelector('#image3')
const date3 = document.querySelector('#date3')
const location3 = document.querySelector('#location3')

/* Info for Event 4 */

const title4 = document.querySelector('#title4')
const image4 = document.querySelector('#image4')
const date4 = document.querySelector('#date4')
const location4 = document.querySelector('#location4')

// AJAX call
const request = new XMLHttpRequest();
request.open('GET', 'events.json');
request.send();
request.addEventListener('load', function(){
  console.log("trying")
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



