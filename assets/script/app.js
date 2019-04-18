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

  placeSearch({
    key: 'SzMAPmTeOI5jHoAV1AdN1Ro2g1r8lACM',
    container: document.querySelector('.place-search-input'),
    useDeviceLocation: true
  });

  placeSearch({
    key: 'SzMAPmTeOI5jHoAV1AdN1Ro2g1r8lACM',
    container: document.querySelector('.place-search-input2'),
    useDeviceLocation: true
  });

  var geocodingKey = 'SzMAPmTeOI5jHoAV1AdN1Ro2g1r8lACM'
  var location1 = $('#location1').val();
  var location2 = $('#location2').val();
  var geocodingURL = 'https://www.mapquestapi.com/geocoding/v1/batch?&inFormat=kvp&outFormat=json&thumbMaps=false&maxResults=1&location=' + location1 + '&location=' + location2 + '&key=' + geocodingKey;
  var results;

  console.log(location1);
  console.log(location2);
  console.log(geocodingURL);


  $.ajax({
    url: geocodingURL
  }).done(function (response) {
    console.log(response);
    console.log(response.results);
    console.log(response.results[0].locations[0].latLng.lat);
    console.log(response.results[0].locations[0].latLng.lng);
    console.log(response.results[1].locations);

    var loc1results = response.results[0].locations[0];
    var loc2results = response.results[1].locations[0];

    console.log(loc1results);

    var loc1type = loc1results.geocodeQuality;
    var loc1lat = loc1results.latLng.lat;
    var loc1lng = loc1results.latLng.lng;
    var loc1coords = loc1lat + ', ' + loc1lng;

    console.log(loc1lat);


    var loc2lat = loc2results.latLng.lat;
    var loc2lng = loc2results.latLng.lng;
    var loc2coords = loc2lat + ', ' + loc2lng;

    console.log('location type: ' + loc1type + ', ' + loc1coords);
    console.log(loc2coords);


  })


  $('.side-panel').append(location1 + location2);
  $('.side-panel').append('<p>' + results + '</p>');


}



