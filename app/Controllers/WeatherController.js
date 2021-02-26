import { ProxyState } from "../AppState.js"
import { sandboxApi } from "../Services/AxiosService.js"
import { weatherService } from "../Services/WeatherService.js"

function _draw() {

}

export default class WeatherController {
   constructor() {
      this.getCurrentWeather()
      ProxyState.on('weather', _draw)
   }

   getCurrentWeather() {
      weatherService.getCurrentWeather()
   }
}