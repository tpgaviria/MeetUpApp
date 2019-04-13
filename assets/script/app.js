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



function middlePoint() {


}

function displayPlaces() {

  var places = $(this).attr("data-name");
  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?&location=atlanta";

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    headers: { 'Authorization': 'Bearer cTXs93Tu7cOPhOYuXLLZdE5SIIkZRBS19EXdpPFQ3kBP7QyfYF3Uwbk6ZzwygDmXzdFKv0g8ndmZecAPAdKKOm3aeqFhD_wrH2DP6vmneVo0nRIO90SbPc-hjZKuXHYx' },
    method: "GET",
    dataType: 'json',
  })
    .then(function (response) {
      console.log(response);
      console.log("hi this is me");
    

      var name = response.name;
      var pOne = $("<h3></h3>").text(name);
      side - panel.append(pOne);
      var address = response.Address;
      var pTwo = $("<p>").text(address);
      side - panel.append(pTwo);
      var categories = response.Categories;
      var pThree = $("<p>").text(categories);
      side - panel.append(pThree);
      var reviews = response.Reviews;
      var pFour =  $("<p>").text(reviews);
      side-panel.append(pFour);
      var imgURL = response.Image;
      var image = $("<img>").attr("src", imgURL);
      side - panel.append(image);

      $("#places-view").prepend(side - panel);
    });

}
displayPlaces();