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

window.onload = function() {
  placeSearch({
  key: 'SzMAPmTeOI5jHoAV1AdN1Ro2g1r8lACM',
  container: document.querySelector('.place-search-input'),
  useDeviceLocation: true
});

};



function addressSearch() {

  var geocodingKey = 'SzMAPmTeOI5jHoAV1AdN1Ro2g1r8lACM'
  var location1 = $('#location1').val();
  var location2 = $('#location2').val();
  var geocodingURL = 'https://www.mapquestapi.com/geocoding/v1/batch?&inFormat=kvp&outFormat=json&thumbMaps=false&maxResults=1&location=' + location1 + '&location=' + location2 + '&key=' + geocodingKey;
  var results;

  console.log(location1);
  console.log(location2);
  // console.log(geocodingURL);


  $.ajax({
    url: geocodingURL
  }).done(function (response) {
    // console.log(response);
    // console.log(response.results);
    // console.log(response.results[0].locations[0].latLng.lat);
    // console.log(response.results[0].locations[0].latLng.lng);
    // console.log(response.results[1].locations);

    var loc1results = response.results[0].locations[0];
    var loc2results = response.results[1].locations[0];

    // console.log(loc1results);

    var loc1type = loc1results.geocodeQuality;
    var loc1lat = loc1results.latLng.lat;
    var loc1lng = loc1results.latLng.lng;
    
    
    var loc1coords = [loc1lat,loc1lng];
    
    var loc2lat = loc2results.latLng.lat;
    var loc2lng = loc2results.latLng.lng;
    var loc2coords = [loc2lat, loc2lng];
    

    console.log('location type: ' + loc1type + ', ' + loc1coords);
    console.log(loc2coords);
    $('.side-panel').append('Location 1: ' + location1 + '<br>Coordinates: ' + loc1coords + '<br><br>');
    $('.side-panel').append('Location 2: ' + location2 + '<br>Coordinates: ' + loc2coords);
  })
  
  
  
  

// converting latLng array values to radians to calculate midpoint
let loc1CoordsRads = degreesToRadians(loc1coords);
let loc2CoordsRads = degreesToRadians(loc2coords);
// calling the midpoint function
let midpointInRads = findMidPoint(loc1CoordsRads, loc2CoordsRads);
// converting midpoint back to degrees
let midPointInDeg = radiansToDegrees(midpointInRads);
// ^ midPointInDegrees can be passed as an argument to the yelp API call function.

//function to convert unsigned lat lon in degrees to radians
function degreesToRadians(latLngArray) {
  let [lat, long] = latLngArray;
  let lanInRads = lat * (Math.PI / 180);
  let longInRads = long * (Math.PI / 180);
  return [lanInRads, longInRads];
}

// Inverse of the degreesToRadians function to be called after the midpoint is calculated
// and before the results (which need to be in degrees) are passed to the yelp API call
function radiansToDegrees(latLngRadsArray) {
  let [lat, long] = latLngRadsArray;
  let latDegs = lat * (180 / Math.PI);
  let longDegs = long * (180 / Math.PI);
  return [latDegs, longDegs];
}

// function that calculates the midpoint beteween 2 points on the map.
// must be passed two arrays of length 2, each element in the arrays must be in units of radians.
// returns an array length 2: [lat in radians, long in radians]
function findMidPoint(latLngRadsArray1, latLngRadsArray2) {
  let [lat1, long1] = latLngRadsArray1;
  let [lat2, long2] = latLngRadsArray2;

  if (Math.abs(long2 - long1) > Math.PI) {
    long1 += 2 * Math.PI; // crossing anti-meridian
  }

  var lat3 = (lat1 + lat2) / 2;
  var f1 = Math.tan(Math.PI / 4 + lat1 / 2);
  var f2 = Math.tan(Math.PI / 4 + lat2 / 2);
  var f3 = Math.tan(Math.PI / 4 + lat3 / 2);
  var long3 = ((long2 - long1) * Math.log(f3) + long1 * Math.log(f2) - long2 * Math.log(f1)) / Math.log(f2 / f1);

  if (!isFinite(long3)) {
    long3 = (long1 + long2) / 2; // parallel of latitude
  }
  //The longitude can be normalised to −180…+180 using (lon+540)%360-180 ??
  return [lat3, long3];
}

// function to render a point on the map
// latLngArray should be in the form of [51.5, -0.09]
function renderPoint(latLngArray) {
  var marker = L.marker(latLngArray).addTo(mymap);
}

}