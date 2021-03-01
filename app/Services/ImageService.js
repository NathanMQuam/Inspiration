import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js"

class ImageService {
   async getBackgroundImage() {
      try {
         let res = await sandboxApi.get('images')
         console.log(res.data);
         ProxyState.backgroundUrl = res.data.url
         let img = new Image()
         img.onload = function () { console.log('large image loaded'); ProxyState.backgroundUrl = res.data.large_url}
         img.src = res.data.large_url
      } catch (error) {
         console.error(error);
      }
   }
}

export const imageService = new ImageService()