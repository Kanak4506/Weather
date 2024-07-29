const weather_place = document.querySelector('.weather_place');
const temperature_elem = document.querySelector('.temperature');
const humidity_elem = document.querySelector('.humidity');
const wind_elem = document.querySelector('.wind');
const day_info = document.querySelector('.day_info');
const condition_icon = document.querySelector('.condition_img');
const currentTemp = document.querySelector('.currentTemp');
const temp_last_updated = document.querySelector('.temp_last_updated');
const dew_point = document.querySelector('.dew_point');
const heat_index = document.querySelector('.heat_index')
const wind_gust = document.querySelector('.wind_gust')
const wind_direction = document.querySelector('.wind_direction')
const search_text = document.querySelector('#search_text')
const search_btn = document.querySelector('#search_btn')
const correct = document.querySelector('.correct')
const error_elem = document.querySelector('.error')

async function weatherForecast(location) {
    try {

        correct.style.display = 'block';
        error_elem.style.display = 'none';

        const weatherURL = `https://api.weatherapi.com/v1/current.json?key=81684eddc5324a0dbf345025242807&q=${location}`;
        const res = await fetch(weatherURL);
        const weather_data = await res.json();
        weather_place.innerHTML = `Weather for ${weather_data.location.name}`
        temperature_elem.innerHTML = `${weather_data.current.temp_c} <span>°C</span>`
        day_info.innerHTML = `${weather_data.current.condition.text}`
        condition_icon.src = `${weather_data.current.condition.icon}`
        currentTemp.innerHTML = `Temp is ${weather_data.current.temp_c}°C or ${weather_data.current.temp_f}°F`
        temp_last_updated.innerHTML = `Feels like: ${weather_data.current.feelslike_c}°C`;
        humidity_elem.innerHTML = `${weather_data.current.humidity}<span>%</span>`
        dew_point.innerHTML = `Dew-point ${weather_data.current.dewpoint_c}°C`;
        heat_index.innerHTML = `Apparent temperature ${weather_data.current.heatindex_c}°C`;
        wind_elem.innerHTML = `${weather_data.current.wind_kph} <span>km/hr</span>`;
        wind_gust.innerHTML = `Wind Gust: ${weather_data.current.gust_kph} km/hr`;
        wind_direction.innerHTML = `Wind Direction: ${weather_data.current.wind_dir}`;
    
    } catch (error) {
        console.log(error)
        correct.style.display = 'none';
        error_elem.style.display = 'inline-block';
    }
   
}

weatherForecast('Samalkha')
search_btn.addEventListener('click', () => {
    const searched_location = search_text.value;
    weatherForecast(searched_location)
})

search_text.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const searched_location = search_text.value;
        weatherForecast(searched_location)
    }
})

