import { ProxyState } from "../AppState.js"

function _draw() {

}

export default class WeatherController {
   constructor() {
      this.getCurrentWeather()
      ProxyState.on('weather', _draw)
   }

   getCurrentWeather() {

   }
}