fetch('https://maps.googleapis.com/maps/api/geocode/json?place_id=ChIJeRpOeF67j4AR9ydy_PIzPuM&key=AIzaSyDwjgDs9LYpMawVbhR1p_QZoPblI7O8ijE')
.then(response=>{
    return response.json();
}).then(json=>{
    console.log(json);
})