search_button = document.getElementById("search-button");
search_button.addEventListener("click", function(){
    getNewInputData(document.getElementById("place-input").value);
});

async function getNewInputData(new_input){
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${new_input}&APPID=c29b4a211db56e2c54591d2330d2d5cd`);
    let required_data = await response.json();
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

function changeData(specific_data, specific_id, pre, post){
    document.getElementById(specific_id).innerHTML = pre + specific_data + post;
}

function changeWeatherPic(weather_desc){
    document.getElementById("weather-pic").src = "http://openweathermap.org/img/wn/" + weather_desc + "@2x.png";
}

getNewInputData("Mumbai");