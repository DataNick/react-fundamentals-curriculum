var axios = require('axios');

var BASEURL = "http://api.openweathermap.org/data/2.5/";
var WEATHER = "weather?q=CITY-NAME&type=accurate&APPID=" + APIKEY;
var FORECAST = "forecast/daily?q=CITY-NAME&type=accurate&APPID=" + APIKEY + "&cnt=5";
var APIKEY = '9cecc6b72c2a20f9f6ac913d1daf6fd8'

function getCityWeather(cityname) {
  return axios.get(BASEURL + "weather?q=" + cityname + "&type=accurate&APPID=9cecc6b72c2a20f9f6ac913d1daf6fd8").then(function (currentWeatherData) {
      return currentWeatherData.data
    }).catch(function(error){
      console.log("There was an error", error)
    })
  }


function getCityForecast(cityname) {
  return axios.get(BASEURL + "forecast/daily?q=" + cityname + "&type=accurate&APPID=9cecc6b72c2a20f9f6ac913d1daf6fd8&cnt=5")
  .then(function(currentForecastData){
    return currentForecastData.data
  })
}

var helpers = {
  getCityWeather: getCityWeather,
  getCityForecast: getCityForecast
};

module.exports = helpers;