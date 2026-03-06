const apiKey = "451935016e5b87eeb6782312908a9587"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        alert("City not found");
        return;
    }

    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherIcon = document.querySelector(".weather-icon");

    if(data.weather[0].main == "Clouds"){
        weatherIcon.className = "ri-cloudy-fill weather-icon";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.className = "ri-rainy-fill weather-icon";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.className = "ri-sun-fill weather-icon";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.className = "ri-snowy-fill weather-icon";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});