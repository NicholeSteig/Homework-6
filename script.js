//var weatherKey = "ee07ff4c3d03e19a43009d1b835b10fc"
//function date() {

//};

function updateCurrent() {

    //var currentCard = $("#current-weather");

    //Print date
    //var today = moment().format('dddd, MMMM Do').val();

    //$("#current-forecast").append(today);
    //console.log(today);
    //print temp

    //print humidity
    //print wind speed
    //print UV Index

};



function getForecast() {

    var city = $("#city-to-search").val().trim();
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast/?q=" + city + "&units=imperial&APPID=ee07ff4c3d03e19a43009d1b835b10fc"

    //var queryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=5,&appid=ee07ff4c3d03e19a43009d1b835b10fc";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var i = 0; i < 5; i++){
            var responseNumber = i * 8;
        console.log(response);
       var responseValue = response.list[responseNumber];
        var dayDate = responseValue.dt_txt;
        console.log(dayDate);
        var dayWeather = responseValue.weather[0].main;
        var dayTemp = responseValue.main.temp;
        var dayHum = responseValue.main.humidity;
        var dayWind = responseValue.wind.speed;


        //var dayUV =
        // var dayDiv = "#current-weather";
        // $(dayDiv).text(cityName);
        // updateCurrent(response);
        console.log(dayWeather);
        console.log(dayTemp);
        console.log(dayHum);
        console.log(dayWind);

        // var dayDateResult = "#day-" + i;
        // var dayWeatherResult = "#weather-" + i;
        // var dayTempResult = "#temp-" + i;
        // var dayHumResult = "#humid-" + i;
        // var dayWindResult = "#wind-" + i;

        // $(dayDateResult).text("Forecast for " + dayDate);
        // $(dayWeatherResult).text("Weather: " + dayWeather);
        // $(dayTempResult).text("Temperature:  " + dayTemp + " degrees K");
        // $(dayHumResult).text("Humidity: " + dayHum + "%");
        // $(dayWindResult).text("Wind Speed: " + dayWind + " mph");

        };

    });
};

function getWeather() {

    var city = $("#city-to-search").val();

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",us,&appid=ee07ff4c3d03e19a43009d1b835b10fc";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);
        var cityName = response.name;
        var currentWeather = response.weather[0].main;
        var currentTemp = response.main.temp;
        //var currentTempF = 
        var currentHum = response.main.humidity;
        var currentWind = response.wind.speed;
        //var currentUV = 
        var currentCityResult = "#current-city";
        var currentWeatherResult = "#current-weather";
        var currentTempResult = "#current-temp";
        //convert to F
        //f = k × 9/5 - 459.67
        var currentHumResult = "#current-humid";
        var currentWindResult = "#current-wind";

        $(currentCityResult).text("Weather In " + cityName);
        $(currentWeatherResult).text("Current Weather: " + currentWeather);
        $(currentTempResult).text("Current Temperature:  " + currentTemp + " degrees K");
        $(currentHumResult).text("Current Humidity: " + currentHum + "%");
        $(currentWindResult).text("Current Wind Speed: " + currentWind + " mph");
        //updateCurrent(response);

    });
};

$("button").on("click", function () {
    var city = $("#city-to-search").val;
    event.preventDefault();
    //getWeather(city);
    getForecast(city);
    updateCurrent();
    //makeCityList();
    //saveCity(city);
});

function makeCityButton() {
    var cityButton = $("<button>", { 'class': 'cityBtn' }).html("city");
    cityList.append(cityButton);



};

    // function saveCity(){
    //     var city = $("#city-to-search").val().trim();
    //     localStorage.setItem("value0", city.value);
    //     var savedData = localStorage.getItem("value0");
    //     console.log(savedData);
    // }
