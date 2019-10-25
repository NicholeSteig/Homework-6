//var weatherKey = "ee07ff4c3d03e19a43009d1b835b10fc"

$("button").on("click", function () {
    event.preventDefault();

    var city = $("#city-to-search").val();

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us,&appid=ee07ff4c3d03e19a43009d1b835b10fc";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
});
