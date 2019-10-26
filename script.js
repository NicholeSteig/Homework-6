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



    // function getForecast() {

    //     var city = $("#city-to-search").val().trim();

    //     var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us,&appid=ee07ff4c3d03e19a43009d1b835b10fc";

    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {

    //         console.log(response);
    //         var cityName = response.city.name;
    //         var currentWeather = response.
    //         var currentTemp = response.city
    //         var currentHum =
    //         var currentWind =
    //         var currentUV =
    //         var currentDiv = "#current-weather";
    //         $(currentDiv).text(cityName);
    //         //updateCurrent(response);


    //     });
    // };

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
            var currentHum = response.main.humidity;
            var currentWind = response.wind.speed;
            //var currentUV = 
            var currentCityResult = "#current-city";
            var currentWeatherResult = "#current-weather";
            var currentTempResult = "#current-temp";
            var currentHumResult = "#current-humid";
            var currentWindResult = "#current-wind";
            console.log(currentWeather);
            console.log(currentTemp);
            console.log(currentHum);
            console.log(currentWind);
            $(currentCityResult).text(cityName);
            $(currentWeatherResult).text("Current weather: " + currentWeather);
            $(currentTempResult).text("Current Temperature:  " + currentTemp + " degrees K");
            $(currentHumResult).text("Current Humidity: " + currentHum + "%");
            $(currentWindResult).text("Current Wind Speed: " + currentWind + " mph");
            //updateCurrent(response);

        });
    };

    $("button").on("click", function () {
        var city = $("#city-to-search").val;
        event.preventDefault();
        //getForecast(city);
        getWeather(city);
        updateCurrent();

    });

