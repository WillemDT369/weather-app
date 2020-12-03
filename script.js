let unit = "metric";
let appId = "973c1e93dca799be6bfb0246ebbab1b3";


function searchWeather(cityName) {
    // also check `${}`syntax
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + appId + "&units=" + unit)
        // Convert data to json    
        .then(function(result) {
            return result.json()
        })
        .then(function(result) {
            displayWeatherInfo(result);
        })
        .catch(function() {
            // catch any errors
        });
}

function displayWeatherInfo(apiData) {
    console.log(apiData);
    // putting info from api inside html elements
    let temperature = document.getElementById("temperature");
    let forecastHeader = document.getElementById("forecastHeader");

    temperature.innerHTML = "Todays temperature is " + Math.floor(apiData.main.temp) + "°C";
    forecastHeader.innerText = apiData.name;


}

document.getElementById("run").addEventListener("click", (event) => {
    // city has to be inside here otherwise it gets stuck in the first chosen city
    let city = document.getElementById("city").value;
    // cancels the default action (here: of the form action attribute) 
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    event.preventDefault();
    if (searchWeather(city))
        console.log(searchWeather(city));
    // console.log(city);
})