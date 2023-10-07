// import fetch from 'cross-fetch';
const apiKey = 'a891121b8b94d8c799da24c11dbf4b23'
//searchBar.addEventListener('keyup', displayWeather);
function displayWeather(e){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        .then(response => {
            if(!response.ok) throw new Error(response.statusText);
                return response.json()
            })
        .then(data => {
            console.log(data);
            let row = document.querySelector("#hikeWeather");
            row.innerHTML = data.list.map((day, idx) => {
                let n = idx/4;
                if (idx%4===0 && n%2===1){
                    return `<div class="col">
                    <div>
                        <h4 class="date" >Date: ${day.dt_txt}</h4>
                        <div class="card-body">
                            <h4 class="title" >${day.weather[0].main}</h4>
                            <p>Humidity ${day.main.humidity}</p>
                            <p>Wind speed ${day.wind.speed}</p>
                            <p>Feel like ${day.main.feels_like}&deg;C</p>
                        </div>
                    </div>
                </div>`;
                }
            }).join('');
        })
        .catch(err => alert("Error"));
}


