console.log('testing, hi this is the correct js file :)')


// materialize - text input styling initialize
$(document).ready(function () {
  $('input#input_text, textarea#textarea2').characterCounter();
});



// materialize - modal functionality
$(document).ready(function () {
  $('.modal').modal();
});


// materialize - small screen sidebar nav
$(document).ready(function () {
  $('.sidenav').sidenav();
});






// map search

$('button').on('click', function () {

  event.preventDefault();
  addressSearch();
})

function addressSearch() {

  // placeSearch({
  //   key: 'SzMAPmTeOI5jHoAV1AdN1Ro2g1r8lACM',
  //   container: document.querySelector('.place-search-input'),
  //   useDeviceLocation: true
  // });

  var geocodingKey = 'SzMAPmTeOI5jHoAV1AdN1Ro2g1r8lACM'
  var location1 = $('#location1').val();
  var location2 = $('#location2').val();
  var geocodingURL = 'https://www.mapquestapi.com/geocoding/v1/batch?&inFormat=kvp&outFormat=json&thumbMaps=false&maxResults=1&location=' + location1 + '&location=' + location2 + '&key=' + geocodingKey;


  console.log(location1);
  console.log(location2);
  console.log(geocodingURL);


  $.ajax({
    url: geocodingURL
  }).done(function (response) {
    console.log(response);
  })
}



function middlePoint() {

}