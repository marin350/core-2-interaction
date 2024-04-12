var apiURL = 
"https://api.weather.gov/gridpoints/OKX/34,38/forecast";


//online tutorial help to write conditional
function emoji(shortForecast) {
    const forecast = shortForecast.toLowerCase();
    if (forecast.includes("sunny")) {
        return "☀️";
    } else if (forecast.includes("cloudy")) {
        return "☁️";
    } else if (forecast.includes("rain") || forecast.includes("shower")) {
        return "🌧️";
    }   else if (forecast.includes("partly sunny") || forecast.includes("partly sunny")) {
        return "🌥";
    } else if (forecast.includes("mostly sunny") || forecast.includes("mostly sunny")) {
        return "🌥";
    } else if (forecast.includes("mostly cloudy") || forecast.includes("mostly cloudy")) {
        return "☁️";
    } else if (forecast.includes("partly cloudy") || forecast.includes("partly cloudy")) {
        return "☁️";
    } else if (forecast.includes("clear") || forecast.includes("clear")) {
        return "🏙";
    } 
    else {
        return "";
    }
}


fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        console.log(data.properties.periods);
        

        data.properties.periods.forEach(day => {
            // console.log(day)
            const div = document.createElement('div');
            div.className = "weather-display";
            const shortForecast = day.shortForecast;
            document.body.appendChild(div);
            div.innerHTML = `
            <div class="grid">
                <div class="item1">
                    <br>
                    <h2 class="day" >${day.name}</h2>
                    <p class="details">Temperature: ${day.temperature}  <span>  &deg ${day.temperatureUnit} </span></p>
                    <p class="details" >Windspeed: ${day.windSpeed}</p>
                    <br>
                    <p class="details" >Forecast: ${day.detailedForecast}</p>
                    <hr>
                </div>
                <div class="item2">
                    <span>
                    <img src="${day.icon}" alt="">
                    <span class="emoji">${emoji(shortForecast)}</span>
                    </span>
                </div>
            </div>
            </div>
            `;
        });
    });
    
    