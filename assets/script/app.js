console.log('testing, hi this is the correct js file :)')

$(document).ready(function () {
  // materialize - text input styling initialize
  $('input#input_text, textarea#textarea2').characterCounter();

  // materialize - modal functionality
  $('.modal').modal();

  // materialize - small screen sidebar nav
  $('.sidenav').sidenav();
});

<<<<<<< HEAD

let midPointLat = 0;
let midPointLong = 0;



=======
>>>>>>> da24f8415642f30e3facb84fc15eaced5519078e
// map search
$('button').on('click', function () {
  event.preventDefault();
  addressSearch();
})

<<<<<<< HEAD


function addressSearch() {
=======
// window.onload = function () {
//   placeSearch({
//     key: 'SzMAPmTeOI5jHoAV1AdN1Ro2g1r8lACM',
//     container: document.querySelector('.place-search-input'),
//     useDeviceLocation: true
//   });
// };

let routeVectorLatLngArray = [];
>>>>>>> da24f8415642f30e3facb84fc15eaced5519078e

function addressSearch() {

  const geocodingKey = 'SzMAPmTeOI5jHoAV1AdN1Ro2g1r8lACM'
  let location1 = $('#location1').val();
  let location2 = $('#location2').val();
  let geocodingURL = 'https://www.mapquestapi.com/geocoding/v1/batch?&inFormat=kvp&outFormat=json&thumbMaps=false&maxResults=1&location=' + location1 + '&location=' + location2 + '&key=' + geocodingKey;
  let results;

  console.log(location1);
  console.log(location2);
  // console.log(geocodingURL);
<<<<<<< HEAD

=======
>>>>>>> da24f8415642f30e3facb84fc15eaced5519078e

  $.ajax({
    url: geocodingURL
  }).done(function (response) {
<<<<<<< HEAD

=======
    // console.log(response);
    // console.log(response.results);
    // console.log(response.results[0].locations[0].latLng.lat);
    // console.log(response.results[0].locations[0].latLng.lng);
    // console.log(response.results[1].locations);
>>>>>>> da24f8415642f30e3facb84fc15eaced5519078e

    let loc1results = response.results[0].locations[0];
    let loc2results = response.results[1].locations[0];

<<<<<<< HEAD

    var loc1type = loc1results.geocodeQuality;
    var loc1lat = loc1results.latLng.lat;
    var loc1lng = loc1results.latLng.lng;
=======
    // console.log(loc1results);

    let loc1type = loc1results.geocodeQuality;
    let loc1lat = loc1results.latLng.lat;
    let loc1lng = loc1results.latLng.lng;
    let loc1coords = [loc1lat, loc1lng];
>>>>>>> da24f8415642f30e3facb84fc15eaced5519078e

    let loc2lat = loc2results.latLng.lat;
    let loc2lng = loc2results.latLng.lng;
    let loc2coords = [loc2lat, loc2lng];

<<<<<<< HEAD
    var loc1coords = [loc1lat, loc1lng];

    var loc2lat = loc2results.latLng.lat;
    var loc2lng = loc2results.latLng.lng;
    var loc2coords = [loc2lat, loc2lng];


=======
>>>>>>> da24f8415642f30e3facb84fc15eaced5519078e
    console.log('location type: ' + loc1type + ', ' + loc1coords);
    console.log(loc2coords);
    $('.side-panel').append('Location 1: ' + location1 + '<br>Coordinates: ' + loc1coords + '<br><br>');
    $('.side-panel').append('Location 2: ' + location2 + '<br>Coordinates: ' + loc2coords);

<<<<<<< HEAD




=======
>>>>>>> da24f8415642f30e3facb84fc15eaced5519078e
    // converting latLng array values to radians to calculate midpoint
    let loc1CoordsRads = degreesToRadians(loc1coords);
    let loc2CoordsRads = degreesToRadians(loc2coords);
    // calling the midpoint function
    let midpointInRads = findMidPoint(loc1CoordsRads, loc2CoordsRads);
    // converting midpoint back to degrees
    let midPointInDeg = radiansToDegrees(midpointInRads);
    // ^ midPointInDegrees can be passed as an argument to the yelp API call function.
<<<<<<< HEAD
    midPointLat = midPointInDeg[0];
    midPointLong = midPointInDeg[1];


    console.log('location 1 radians: ' + loc1CoordsRads);
    console.log('location 2 radians: ' + loc2CoordsRads);

    console.log('midpoint in radians: ' + midpointInRads);
    console.log('midpoint coords: ' + midPointLat + ', ' + midPointLong);



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
    displayPlaces();
  })
}

function displayPlaces() {

  // var places = $(this).attr("data-name");
  //var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?text=del&latitude=37.786882&longitude=-122.399972";
  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=" + midPointLat + "&longitude=" + midPointLong;

  $.ajax({
    url: queryURL,
    headers: { 'Authorization': 'Bearer cTXs93Tu7cOPhOYuXLLZdE5SIIkZRBS19EXdpPFQ3kBP7QyfYF3Uwbk6ZzwygDmXzdFKv0g8ndmZecAPAdKKOm3aeqFhD_wrH2DP6vmneVo0nRIO90SbPc-hjZKuXHYx' },
    method: "GET",
    dataType: 'json',
  })
    .then(function (response) {
      console.log(response);
      console.log("hi this is me");
      $(".side-panel").empty();
=======

    console.log(midPointInDeg);

    $('.side-panel').append('Location 1: ' + location1 + '<br>Coordinates: ' + loc1coords + '<br><br>');
    $('.side-panel').append('Location 2: ' + location2 + '<br>Coordinates: ' + loc2coords);
  })
}
>>>>>>> da24f8415642f30e3facb84fc15eaced5519078e

// console.log('location 1 radians: ' + loc1CoordsRads);
// console.log('location 2 radians: ' + loc2CoordsRads);
// console.log('midpoint in radians: ' + midpointInRads);
// console.log('midpoint coords: ' + midPointLat + ', ' + midPointLongitude);

//function to convert unsigned lat lon in degrees to radians
function degreesToRadians(latLngArray) {
  let [lat, long] = latLngArray;
  let lanInRads = lat * (Math.PI / 180);
  let longInRads = long * (Math.PI / 180);
  return [lanInRads, longInRads];
}

<<<<<<< HEAD

      for (var i = 0; i <= 9; i++) {

        // console.log(newResult);
        var name = response.businesses[i].name;
        // console.log(name);
        var categories = response.businesses[i].categories[0].title;
        // console.log(categories);
        var address = response.businesses[i].location.display_address;
        // console.log(address);
        var display_phone = response.businesses[i].display_phone;
        // console.log(display_phone);
        var price = response.businesses[i].price;
        // console.log(price);
        var rating = response.businesses[i].rating;
        // console.log(rating);
        var review_count = response.businesses[i].review_count;
        // console.log(review_count);
        var image_url = response.businesses[i].image_url;
        // var myImage = $('<img>').attr('src', image_url);





        var myStars;

        if (rating === 5) {
          // <img src="" value=>
          myStars = "/assets/images/small_5@2x.png";
        }
        else if (rating === 4.5) {
          myStars = "/assets/images/small_4_half@2x.png";
        }

        else if (rating === 4) {
          myStars = "/assets/images/small_4@2x.png";
        }
        else if (rating === 3.5) {
          myStars = "/assets/images/small_3_half@2x.png";
        }


        else if (rating === 3) {
          myStars = "/assets/images/small_3@2x.png";
        }
        else if (rating === 2.5) {
          myStars = "/assets/images/small_2_half@2x.png";
        }
        else if (rating === 2) {
          myStars = "/assets/images/small_2@2x.png";
        }
        else if (rating === 1.5) {
          myStars = "/assets/images/small_1_half@2x.png";
        }
        else if (rating === 1) {
          myStars = "/assets/images/small_1@2x.png";
        } else {
          myStars = "";
        }



        var newResult = $("<div data-attr='" + i + "'>").html(
          "<img class='pic' src='" + image_url + "'/>" +
          "<h3>" + (i + 1) + ". " + name + "</h3>" +
          "<h4 class='cat'>" + categories + "</h4>" +
          "<h4>" + address + "</h4>" +
          "<h4>" + display_phone + "</h4>" +
          "<h4>" + price + "</h4>" +
          "<h4>" + rating + "</h4> <img src='" + myStars + "'/>" +
          "<h4> Reviews: " + review_count + "</h4>")



        newResult.on('click', meetAddress);



        $('.side-panel').append(newResult);
=======
// Inverse of the degreesToRadians function to be called after the midpoint is calculated
// and before the results (which need to be in degrees) are passed to the yelp API call
function radiansToDegrees(latLngRadsArray) {
  let [lat, long] = latLngRadsArray;
  let latDegs = lat * (180 / Math.PI);
  let longDegs = long * (180 / Math.PI);
  return [latDegs, longDegs];
}

// function to render a point on the map
// latLngArray should be in the form of [51.5, -0.09]
// function renderPoint(latLngArray) {
//   let marker = L.marker(latLngArray).addTo(map);
//   midPointLat = midPointInDeg[0];
//   midPointLongitude = midPointInDeg[1];
// }


// function that calculates the midpoint beteween 2 points on the map.
// must be passed two arrays of length 2, each element in the arrays must be in units of radians.
// returns an array length 2: [lat in radians, long in radians]
function findMidPoint(latLngRadsArray1, latLngRadsArray2) {
  let [lat1, long1] = latLngRadsArray1;
  let [lat2, long2] = latLngRadsArray2;

  if (Math.abs(long2 - long1) > Math.PI) {
    long1 += 2 * Math.PI; // crossing anti-meridian
  }

  let lat3 = (lat1 + lat2) / 2;
  let f1 = Math.tan(Math.PI / 4 + lat1 / 2);
  let f2 = Math.tan(Math.PI / 4 + lat2 / 2);
  let f3 = Math.tan(Math.PI / 4 + lat3 / 2);
  let long3 = ((long2 - long1) * Math.log(f3) + long1 * Math.log(f2) - long2 * Math.log(f1)) / Math.log(f2 / f1);

  if (!isFinite(long3)) {
    long3 = (long1 + long2) / 2; // parallel of latitude
  }
  //The longitude can be normalised to −180…+180 using (lon+540)%360-180 ??
  return [lat3, long3];
}

// function to render a point on the map
// latLngArray should be in the form of [51.5, -0.09]
function renderPoint(latLngArray) {
  let marker = L.marker(latLngArray).addTo(mymap);
}
>>>>>>> da24f8415642f30e3facb84fc15eaced5519078e


function displayPlaces() {

  let places = $(this).attr("data-name");

<<<<<<< HEAD
        function meetAddress(event) {

          j = $(this).attr('data-attr');
          console.log(j);

          meetPlace = response.businesses[j].location.display_address[0] + ', ' + response.businesses[j].location.display_address[1];
          console.log(meetPlace);
=======
  let midPointLatitude = 0;
  let midPointLongitude = 0;

  //let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?text=del&latitude=37.786882&longitude=-122.399972";
  let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=" + midPointLatitude + "&longitude=" + midPointLongitude;

  $.ajax({
    url: queryURL,
    headers: { 'Authorization': 'Bearer cTXs93Tu7cOPhOYuXLLZdE5SIIkZRBS19EXdpPFQ3kBP7QyfYF3Uwbk6ZzwygDmXzdFKv0g8ndmZecAPAdKKOm3aeqFhD_wrH2DP6vmneVo0nRIO90SbPc-hjZKuXHYx' },
    method: "GET",
    dataType: 'json',
  }).then(function (response) {
    console.log(response);
    console.log("hi this is me");
    $(".side-panel").empty();

    // only want ten results
    for (i = 0; i <= 9; i++) {

      // console.log(newResult);
      let name = response.businesses[i].name;
      // console.log(name);
      let categories = response.businesses[i].categories[0].title;
      // console.log(categories);
      let address = response.businesses[i].location.display_address;
      // console.log(address);
      let display_phone = response.businesses[i].display_phone;
      // console.log(display_phone);
      let price = response.businesses[i].price;
      // console.log(price);
      let rating = response.businesses[i].rating;
      // console.log(rating);
      let review_count = response.businesses[i].review_count;
      // console.log(review_count);
      let image_url = response.businesses[i].image_url;

      let myImage = $('<img>').attr('src', image_url);

      console.log(image_url);

      let myStars;

      switch (rating) {
        case 5:
          myStars = "/assets/images/small_5@2x.png";
          break;
        case 4.5:
          myStars = "/assets/images/small_4_half@2x.png";
          break;
        case 4:
          myStars = "/assets/images/small_4@2x.png";
          break;
        case 3.5:
          myStars = "/assets/images/small_3_half@2x.png";
          break;
        case 3:
          myStars = "/assets/images/small_3@2x.png";
          break;
        case 2.5:
          myStars = "/assets/images/small_2_half@2x.png";
          break;
        case 2:
          myStars = "/assets/images/small_2@2x.png";
          break;
        case 1.5:
          myStars = "/assets/images/small_1_half@2x.png";
          break;
        case 1:
          myStars = "/assets/images/small_1@2x.png";
          break;
        default:
          myStars = "";
      }

      console.log("hey I am here", myStars);

      let newResult = $("<div>").html(
        "<h3>" + name + "</h3> <br>" +
        myImage +
        "<h4 class='cat'>" + categories + "</h4> <img class='pic' src='" + image_url + "'/>" +
        "<h4>" + address + "</h4>" +
        "<h4>" + display_phone + "</h4>" +
        "<h4>" + price + "</h4>" +
        "<h4>" + rating + "</h4> <img src='" + myStars + "'/>" +
        "<h4> Reviews: " + review_count + "</h4>"
      );

      // $('.side-panel').prepend(newResult);
      console.log("new ", newResult);
      $('.side-panel').append(newResult);
    }
  });
};
>>>>>>> da24f8415642f30e3facb84fc15eaced5519078e

        }
      }
    });
};


<<<<<<< HEAD
let meetPlace = null;
=======
// function to draw the route from a starting point to the selected endpoint from the yelp results
// pass the single line addresses for the starting and ending loations as arguments
// startingPointAddr,endingPointAddr
function displayRouteInfo(startingPointAddr,endingPointAddr) {

  let APIkey = '6scse9ETJfXFQIaeRDPlQAgvAI2hyN7F';
  // let queryURL = 'http://www.mapquestapi.com/directions/v2/route?key=' + APIkey + '&from=' + startingPointAddr + '&to=' + endingPointAddr;
  // below is a statis API call for testing purposes.
  let queryURL = 'http://www.mapquestapi.com/directions/v2/route?key=6scse9ETJfXFQIaeRDPlQAgvAI2hyN7F&from=Clarendon Blvd,Arlington,VA&to=2400+S+Glebe+Rd,+Arlington,+VA'
  let directions = $('<p>');
  let turns = [];
  let firstMove;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).done(function (response) {
    console.log('Routing API call response below');
    console.log(response);
    // responce.route.legs[0].origNarrative is the first message
    // responce.route.legs[0].maneuvers[i].narrative

    firstMove = response.route.legs[0].origNarrative;
    console.log(firstMove);
    let routingInfoArray = response.route.legs[0].maneuvers;
    console.log('routing Info array of objects below')
    console.log(routingInfoArray);

    // this loop runs through the maneuvers array and pushes the value of the narrative key (a string) to the turns array.
    routingInfoArray.forEach(function (element) {
      turns.push(element.narrative);
      let pointLng = element.startPoint.lng;
      let pointLat = element.startPoint.lat;
      let pointLatLng = [pointLat, pointLng];
      routeVectorLatLngArray.push(pointLatLng);
    });

    console.log('route vector coords array below');
    console.log(routeVectorLatLngArray);
    console.log('turns array below');
    console.log(turns);

    $(directions).append(firstMove);

    for (let i = 0; i < turns.length; i++) {
      $(directions).append(turns[i] + '<br>');
    }

    $('#instructions').prepend(directions);
  });
}

displayRouteInfo();
displayPlaces();

var polyline = L.polyline(routeVectorLatLngArray, {color: 'red'}).addTo(map);
// zoom the map to the polyline
map.fitBounds(polyline.getBounds());
>>>>>>> da24f8415642f30e3facb84fc15eaced5519078e
