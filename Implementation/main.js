// POSTMAN API KEY: PMAK-62192d8c0dbc090e8dcc5569-582c714fa05b110e74bb19f40bc2dfbcfd

const searchBar = document.getElementById('searchBar')
const hikeMap = document.querySelector('#hikeMap')

searchBar.value = ''

window.addEventListener('load', initMap)
searchBar.addEventListener('keyup', queryManager)
let map
let address
let latitude, longitude
let places
function queryManager (e) {
  if (e.key === 'Enter') {

    displayMapFromQuery()
  }
}
function displayMapFromQuery () {
  address = new google.maps.LatLng(latitude, longitude)
  var mapOption = {
    zoom: 13,
    center: address
  }
  map = new google.maps.Map(hikeMap, mapOption)

  new google.maps.Marker({
    position: address,
    map
  })
}
//Initialize Map at Richmond B.C
function initMap () {
  geo = new google.maps.Geocoder()
  address = new google.maps.LatLng(49.2248, -123.1085)
  var mapOption = {
    zoom: 13,
    center: address
  }
  map = new google.maps.Map(hikeMap, mapOption)
  //Add a marker at location
  new google.maps.Marker({
    position: address,
    map
  })
  // Add auto-complete function
  places = new google.maps.places.Autocomplete(searchBar)
  google.maps.event.addListener(places, 'place_changed', function () {
    var place = places.getPlace()
    address = place.formatted_address
    latitude = place.geometry.location.lat()
    longitude = place.geometry.location.lng()
    searchBar.focus()
  })    
}
module.exports = queryManager;
module.exports = displayMapFromQuery;