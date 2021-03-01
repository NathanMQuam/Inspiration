import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";

class WeatherService {
   constructor() {
      this.isInitialized = false
   }
   async getCurrentWeather () {
      console.log( 'Getting current weather...' );
      try {
         let res = await sandboxApi.get( 'weather' )
         res = res.data
         console.log( res );
         ProxyState.weather = {
            temp: res.main.temp,
            feelsLike: res.main.feels_like,
            unit: 'k',
            icon: 'http://openweathermap.org/img/wn/' + res.weather[0].icon + '@2x.png',
            weather: res.weather[0].description
         }
         if ( this.isInitialized == false ) {
            this.cycleTempUnit()
            this.isInitialized = true;
         }
      } catch ( error ) {
         console.error( error );
      }
   }

   cycleTempUnit () {
      switch ( ProxyState.weather.unit ) {
         case 'k':
            ProxyState.weather.unit = 'c'
            ProxyState.weather.temp = parseInt( ProxyState.weather.temp ) - 273.15
            ProxyState.weather.feelsLike = parseInt( ProxyState.weather.feelsLike ) - 273.15
            ProxyState.weather = ProxyState.weather
            break;
         case 'c':
            ProxyState.weather.unit = 'f'
            ProxyState.weather.temp = ( ( ProxyState.weather.temp * 1.8 ) + 32 )
            ProxyState.weather.feelsLike = ( ( ProxyState.weather.feelsLike * 1.8 ) + 32 )
            ProxyState.weather = ProxyState.weather
            break;
         default:
            this.getCurrentWeather()
            break;
      }
   }

   get Template () {
      let temp = Math.round( ProxyState.weather.temp )
      let feelsLike = Math.round( ProxyState.weather.feelsLike )
      let unit = ProxyState.weather.unit
      return /*html*/`
         <div>
            <img src="${ProxyState.weather.icon}">
            <div>${ProxyState.weather.weather}</div>
         </div>
         <div class="my-auto">
            <div>${temp}${unit}</div>
            <div>
               <small>Feels like: ${feelsLike}${unit}</small>
            </div>
         </div>
      `
   }
}

export const weatherService = new WeatherService()