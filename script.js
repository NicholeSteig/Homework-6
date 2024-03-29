function getForecast() {

    var city = $("#city-to-search").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast/?q=" + city + "&units=imperial&APPID=ee07ff4c3d03e19a43009d1b835b10fc"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < 5; i++){
            var responseNumber = i * 8;
       var responseValue = response.list[responseNumber];
        var dayDate = responseValue.dt_txt;
        var dayWeather = responseValue.weather[0].main;
        var dayTemp = responseValue.main.temp;
        var dayHum = responseValue.main.humidity;
        var dayWind = responseValue.wind.speed;

        var dayValue = i + 1;
        var dayDateResult = "#day-" + dayValue;
        var dayWeatherResult = "#weather-" + dayValue;
        var dayTempResult = "#temp-" + dayValue;
        var dayHumResult = "#humid-" + dayValue;
        var dayWindResult = "#wind-" + dayValue;

        $(dayDateResult).text("Forecast for " + dayDate);
        $(dayWeatherResult).text("Weather: " + dayWeather);
        $(dayTempResult).text("Temperature:  " + dayTemp + "° F");
        $(dayHumResult).text("Humidity: " + dayHum + "%");
        $(dayWindResult).text("Wind Speed: " + dayWind + " mph");

        };

    });
};

function getWeather() {

    var city = $("#city-to-search").val();

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=ee07ff4c3d03e19a43009d1b835b10fc";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var cityName = response.name;
        var currentWeather = response.weather[0].main;
        var currentTemp = response.main.temp;
        var currentHum = response.main.humidity;
        var currentWind = response.wind.speed;
      
        var currentCityResult = "#current-city";
        var currentWeatherResult = "#current-weather";
        var currentTempResult = "#current-temp";
        var currentHumResult = "#current-humid";
        var currentWindResult = "#current-wind";

        $(currentCityResult).text("Weather In " + cityName);
        $(currentWeatherResult).text("Current Weather: " + currentWeather);
        $(currentTempResult).text("Current Temperature:  " + currentTemp + "° F");
        $(currentHumResult).text("Current Humidity: " + currentHum + "%");
        $(currentWindResult).text("Current Wind Speed: " + currentWind + " mph");
        

    });
};

$("button").on("click", function () {
    var city = $("#city-to-search").val;
    event.preventDefault();
    getWeather(city);
    getForecast(city);
});


    
