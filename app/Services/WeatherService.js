import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";

class WeatherService {
   async getCurrentWeather() {
      console.log('Getting current weather...');
      try {
         const res = await sandboxApi.get('weather')
         console.log(res.data);
      } catch (error) {
         console.error(error);
      }
   }
}

export const weatherService = new WeatherService()