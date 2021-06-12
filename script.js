var userInput = "";
var APIKey = "ec0096873f812a395a9ca6d92f3c0beb";

$('#searchButton').click(function () {
    var clear = "";
    $('#fiveDay').html(clear);

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
                                    render5Day(info);
                    
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
    iconLink = "http://openweathermap.org/img/w/" + icon + ".png";
    uv = data.current.uvi;
    var indexUv = "";

    if (uv <=2 ) {
        indexUv ="low";
    }
    else if (uv <=7) {
        indexUv ="med";
    }
    else if (uv >= 8) {
        indexUv ="high";
    }

    var currentHtml = '<div class="current"><h1>' + city + ' | ' + convertDate(date) + '<img src="' + iconLink + '" alt=""></h1><p>Temp: ' + temp + ' F</p><p>Wind: ' + wind + ' MPH</p><p>Humidity: ' + humid + ' %</p><p class="uv-index-' + indexUv + '">UV Index: ' + uv + '</p></div>';

    console.log('City: ', city);
    console.log('Date: ', convertDate(date));
    console.log('Temprature: ', temp);
    console.log('Weather description: ', descrip);
    console.log('Humidity: ', humid);
    console.log('Icon string: ', icon);
    console.log('Wins speed: ', wind);

    $('#currentWeather').html(currentHtml);

}

function render5Day(data) {

    for(var i = 1; i <= 5; i++) {

        

        dateFD =data.daily[i].dt;
        iconFD =data.daily[i].weather[0].icon.toString();
        tempFD = data.daily[i].temp.max;
        windFD = data.daily[i].wind_speed;
        humidFD = data.daily[i].humidity;
        iconLinkFD = "http://openweathermap.org/img/w/" + iconFD + ".png";

        var fiveDayHtml = '<div  class="fiveDAY"><h3>' + convertDate(dateFD) + '</h3><p>ICON: <img src="' + iconLinkFD + '" alt=""></p><p>Temp: ' + tempFD + ' F</p><p>Wind: ' + windFD + ' MPH</p><p>Humidity: ' + humidFD + ' %</p></div>';

        console.log('test five day :', i);
        console.log('date: ', convertDate(dateFD));
        console.log('icon: ', iconFD);
        console.log('temp', tempFD);
        console.log('wind', windFD);
        console.log('humidity', humidFD);

        $('#fiveDay').append(fiveDayHtml);
    }


}

function convertDate(sloth) {
    var d = new Date(sloth*1000);
    return d.toString();
}

function uvIndex(latitude, longitude) {
    lat = latitude;
    lon = longitude;
}