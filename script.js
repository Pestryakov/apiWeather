// fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=7186438c1e732b43a9a98de32c3a3467')
//     .then(function (resp) {
//         return resp.json() })//convert data to json
//     .then(function (data) {
//         console.log(data);
//         document.querySelector('.package-name').textContent = data.name;
//         document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
//         document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
//         document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
//         //https://openweathermap.org/img/wn/01n@2x.png
//     })
//     .catch(function () {
//         //catch any errors
//     });
    
const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "7186438c1e732b43a9a98de32c3a3467"
    }

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then(weather => {
        return weather.json();
    })
    .then(showWeather)
    }

function showWeather(data){
    console.log(data);
    document.querySelector('.out-country').textContent = `Country: ${data.sys.country}`;
    document.querySelector('.out-temp').innerHTML = `Temp: ${(data.main.temp)}&deg;`;
    document.querySelector('.out-hum').textContent = `Humidity: ${data.main.humidity} %`;
    document.querySelector('.out-pres').textContent = `Pressure: ${data.main.pressure} mm/Hg`;
    document.querySelector('.out-wind').textContent = `Wind: ${data.wind.speed} m/ s`;
    document.querySelector('.out-disclaimer').textContent = `Today: ${data.weather[0]['description']}`;
    document.querySelector('.out-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

getWeather();
document.querySelector('#city').onchange = getWeather;


