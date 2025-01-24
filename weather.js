const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("city");
const weatherIcon = document.getElementById("weatherIcon");
const temp= document.getElementById("temp");
const invalid= document.getElementById("invalid");
const ms= document.getElementById("speed");
const humidity= document.getElementById("humidity");
const rain= document.getElementById("rain");
const monday= document.getElementById("monday");
const my= document.getElementById("my");
const tuesday= document.getElementById("tuesday");
const ty= document.getElementById("ty");
const wednesday= document.getElementById("wednesday");
const wy= document.getElementById("wy");
const friday= document.getElementById("friday");
const fy= document.getElementById("fy");
const saturday= document.getElementById("saturday");
const sy= document.getElementById("sy");

async function getWeather(city) {
   
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=4c975abe2c98c5e5e42527f4ce894439";

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        city.innerHTML = data.main.city;
        weatherIcon.innerHTML = data.main.weatherIcon;
        // temp.innerHTML = data.main.temp;
        cityName.innerHTML=data.name;
        temp.innerHTML = Math.round(data.main.temp) + '°C';
        ms.innerHTML=data.wind.speed;
        humidity.innerHTML=data.main.humidity;
        rain.innerHTML=data.main.pressure;
        
        
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}


searchBtn.addEventListener("click", () => {
    const city= document.getElementById("searchInput").value.trim();
    if (city) {
        getWeather(city);  
    } else {
        alert("Please enter a city name.");
    }
})
