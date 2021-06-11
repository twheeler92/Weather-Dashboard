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
                    console.log(test);
                    renderWeather(test);
                })
            }
        })
    
        
});

function renderWeather(data) {
    var html = ""
    
    city = data.name.toString()
    temp = data.main.temp;
    descrip = data.weather[0].main.toString();

    console.log('City: ', city);
    console.log('Temprature: ', temp);
    console.log('Weather description: ', descrip);

}

function render5Day() {


}