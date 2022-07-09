search_button = document.getElementById("search-button");
search_button.addEventListener("click", function(){
    getNewInputData(document.getElementById("place-input").value);
});

changeTempButton = document.getElementById("temp-changer");

changeTempButton.addEventListener("click", async function(){
    let city = document.getElementById("city-name").innerHTML;
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c29b4a211db56e2c54591d2330d2d5cd`);
    let required_data = await response.json();
    let celsius_temp = required_data.main.temp - 273;
    let celsius_min = required_data.main.temp_min - 273;
    let celsius_max = required_data.main.temp_max - 273;
    let feels_like = required_data.main.feels_like - 273;
    if(changeTempButton.innerHTML[changeTempButton.innerHTML.length - 1] == "s"){
        document.getElementById("main-temperature").innerHTML = Math.round(celsius_temp) + "&#8451;";
        document.getElementById("min-temp").innerHTML = Math.round(celsius_min) + "&#8451;";
        document.getElementById("max-temp").innerHTML = Math.round(celsius_max) + "&#8451;";
        document.getElementById("main-feels-like").innerHTML = "Feels like: " + Math.round(feels_like) + "&#8451;";
        changeTempButton.innerHTML = "Change to Fahrenheit";
    }
    else{
        document.getElementById("main-temperature").innerHTML = Math.round((celsius_temp*1.8) + 32) + "&#8457;";
        document.getElementById("min-temp").innerHTML = Math.round((celsius_min*1.8) + 32) + "&#8457;";
        document.getElementById("max-temp").innerHTML = Math.round((celsius_max*1.8) + 32) + "&#8457;";
        document.getElementById("main-feels-like").innerHTML = "Feels like: " + Math.round((feels_like*1.8) + 32) + "&#8457;";
        changeTempButton.innerHTML = "Change to Celsius";
    }
});

async function getNewInputData(new_input){
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${new_input}&APPID=c29b4a211db56e2c54591d2330d2d5cd`);
    let required_data = await response.json();
    if(required_data.cod != "200"){
        document.getElementById('error-input').style.display = "block";
    }
    else{
        document.getElementById('error-input').style.display = "none";
        console.log(required_data);
        changeData(required_data.name, "city-name", "", "");
        changeWeatherPic(required_data.weather[0].icon);
        console.log(required_data.weather[0].icon);
        changeData(Math.round(required_data.main.temp - 273), "main-temperature", "", "&#8451;");
        changeData(Math.round(required_data.main.feels_like - 273), "main-feels-like", "Feels like: ", "&#8451;");
        changeData(required_data.main.humidity, "main-humidity", "Humidity: ", "%");
        changeData(required_data.weather[0].description[0].toUpperCase() + required_data.weather[0].description.substring(1), "main-clouds", "", "");
        changeData(Math.round(required_data.main.temp_max - 273), "max-temp", "", "&#8451;");
        changeData(Math.round(required_data.main.temp_min - 273), "min-temp", "", "&#8451;");
    }
}

function changeData(specific_data, specific_id, pre, post){
    document.getElementById(specific_id).innerHTML = pre + specific_data + post;
}

function changeWeatherPic(weather_desc){
    document.getElementById("weather-pic").src = "http://openweathermap.org/img/wn/" + weather_desc + "@2x.png";
}

getNewInputData("Mumbai");