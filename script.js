var userInput = "";
var APIKey = "ec0096873f812a395a9ca6d92f3c0beb";










$('#searchButton').click(function () {
    console.log("button works");
    userInput = document.getElementById('userInput').value;
    console.log("User input: ", userInput);

    var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + APIKey;

    fetch(queryUrl)
        .then(function (res) {
            if (res.ok) {
                res.json().then(function (test) {
                    console.log(test);
                })
            }
        })
});