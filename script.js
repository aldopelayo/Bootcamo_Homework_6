const firstdateEl = document.getElementsByClassName('Date');
const currentWeatherEl = document.getElementsByClassName('currentWeather');
const cityEl = document.getElementsByClassName('citySelect');
const countryEl = document.getElementsByClassName('countrySelect');
const fourdayForecastEl = document.getElementsByClassName('fourdayForecast');
const mainItems = document.getElementsByClassName('otherweatheritems');

const API_KEY ='f9f02e38fb61705ecaee683a84451cfe';

getweatherdata()
function getweatherdata() {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude , longitude } = success.coords;

        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}{lat}&lon=${longitude}&exclude=minuetely&units=imperial&appid={API_KEY}').then(res => res.json()).then(data => {

        showWeatherData(data);
        })
    })
}

function showWeatherData (data){
     let {temperature,humidity,pressure, sunrise, sunset, wind_speed}=data.current;

currentWeatherEl.innerHTML=

  ' <div class="otherweatheritems">
         <div>temperature</div>
         <div>${temperature}</div>
     </div>';

}