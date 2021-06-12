var userInput = "";
var APIKey = "ec0096873f812a395a9ca6d92f3c0beb";

$('#searchButton').click(function () {
    console.log("button works");
    userInput = document.getElementById('userInput').value;
    console.log("User input: ", userInput);

    var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&units=imperial&appid=' + APIKey;

    fetch(queryUrl)
        .then(function (res) {
            if (res.ok) {
                res.json().then(function (test) {
                    var userLat = test.coord.lat;
                    var userLon = test.coord.lon;
                    var userCity = test.name.toString();

                    console.log('TEST LAT: ', userLat);
                    console.log('TEST LON: ', userLon);

                    queryUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + userLat + '&lon=' + userLon + '&units=imperial&appid=' + APIKey;
                    queryUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + userLat + '&lon=' + userLon + '&exclude=hourly&units=imperial&appid=' + APIKey;

                    fetch(queryUrl)
                        .then(function (response) {
                            if (response.ok) {
                                response.json().then(function (info) {
                                    console.log(info);
                                    console.log(queryUrl);
                                    renderWeather(info, userCity);
                    
                })
            }
                
        })



                    
                })
            }
                
        })
    
    
        
});

function renderWeather(data, city) {
    
    date = data.current.dt;
    temp = data.current.temp;
    descrip = data.current.weather[0].description.toString();
    wind = data.current.wind_speed;
    humid = data.current.humidity;
    icon = data.current.weather[0].icon.toString();
    uv = data.current.uvi;

    var myHtml = '<div class="current"><h1>' + city + ' | ' + convertDate(date) + '</h1><p>Temp: ' + temp + ' F</p><p>Wind: ' + wind + ' MPH</p><p>Humidity: ' + humid + ' %</p><p>UV Index: ' + uv + '</p></div>';

    console.log('City: ', city);
    console.log('Date: ', convertDate(date));
    console.log('Temprature: ', temp);
    console.log('Weather description: ', descrip);
    console.log('Humidity: ', humid);
    console.log('Icon string: ', icon);
    console.log('Wins speed: ', wind);

    $('#currentWeather').html(myHtml);

}

function render5Day() {


}

function convertDate(sloth) {
    var d = new Date(sloth*1000);
    return d.toString();
}

function uvIndex(latitude, longitude) {
    lat = latitude;
    lon = longitude;
}