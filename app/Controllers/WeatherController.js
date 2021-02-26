import { ProxyState } from "../AppState.js"
import { sandboxApi } from "../Services/AxiosService.js"
import { weatherService } from "../Services/WeatherService.js"

function _draw() {
   document.getElementById('weather').innerHTML = weatherService.Template
}

export default class WeatherController {
   constructor() {
      ProxyState.on('weather', _draw)
      this.getCurrentWeather()
   }

   getCurrentWeather() {
      weatherService.getCurrentWeather()
   }

   cycleTempUnit() {
      weatherService.cycleTempUnit()
   }
}