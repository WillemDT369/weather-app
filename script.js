let units = "metric";
let appId = "973c1e93dca799be6bfb0246ebbab1b3";

function searchWeather(cityName) {
    // also check `${}`syntax
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + appId + "&units=metric")
        .then(function(response) { return response.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {
            // catch any errors
        });
}

window.onload = function() {
    searchWeather("merelbeke");
}








// function searchWeather(searchTerm) {
//     fetch("http://api.openweathermap.org/data/2.5/weather?q=merelbeke&appid=973c1e93dca799be6bfb0246ebbab1b3").then(result => {
//         return result.json();
//     }).then(result => {
//         init(result);
//     })
// }

// function init(resultFromServer) {
//     console.log(resultFromServer);
// }

// document.getElementById("run").addEventListener("click", () => {
//     let searchTerm = document.getElementById("city").value;
//     if (searchTerm)
//         searchWeather(searchTerm);
// })