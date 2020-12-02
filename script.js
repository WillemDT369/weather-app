let unit = "metric";
let appId = "973c1e93dca799be6bfb0246ebbab1b3";


function searchWeather(cityName) {
    // also check `${}`syntax
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + appId + "&units=" + unit)
        // Convert data to json    
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {
            // catch any errors
        });
}

document.getElementById("run").addEventListener("click", (event) => {
    // city has to be inside here otherwise it gets stuck in the first chosen city
    let city = document.getElementById("city").value;
    // cancels the default action (here: of the form action attribute) 
    //https://www.w3schools.com/jsref/event_preventdefault.asp
    event.preventDefault();
    console.log(searchWeather(city));
    // console.log(city);
})








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