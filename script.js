var button = document.getElementById('button');
var city_name = document.getElementById('city-name');
var weather = document.getElementById('weather');
var temp = document.getElementById('temp')
var weather_icon = document.getElementById('weather-icon')
var country = document.getElementById('country')
var city = document.getElementById('city')
var long = document.getElementById('long')
var lat = document.getElementById('lat')
var error = document.getElementById('error');

city_name.focus();

button.addEventListener('click', function() {
    if(city_name.value == "") {
      error.innerHTML = 'Please enter a city!'
    }
    else{
    error.setAttribute('display', 'none');  
    let requestURL = 'https://api.openweathermap.org/data/2.5/weather?q='+city_name.value+'&units=metric&appid=015493ed5c1e7691a10116e53d276572';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
      const weather_data = request.response;
      console.log(weather_data);
        city_name.innerHTML = weather_data.name;
        city.innerHTML ='City: ' + city_name.value;
        country.innerHTML = 'Country: ' + weather_data.sys.country;
        long.innerHTML = 'Longitude: ' + weather_data.coord.lon;
        lat.innerHTML = 'Lattitude: ' + weather_data.coord.lat;
        temp.innerHTML = 'Temperature: ' + weather_data.main.temp+'°C';
        weather.innerHTML = 'Description: ' + weather_data.weather[0].description;
        if(weather_data.weather[0].description.includes('light rain')){
          weather_icon.innerHTML = 'M';
        }
        else if(weather_data.weather[0].description.includes('overcast cloud')){
          weather_icon.innerHTML = 'A';
        }
        else if(weather_data.weather[0].description.includes('broken cloud')){
          weather_icon.innerHTML = '3';
        }
        else if(weather_data.weather[0].description.includes('mist')){
          weather_icon.innerHTML = 'Z';
        }
        else if(weather_data.weather[0].description.includes('drizzle')){
          weather_icon.innerHTML = 'I';
        }
    } }
}, false);

