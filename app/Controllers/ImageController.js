import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";

function _draw() {
   document.body.style.backgroundImage = `url(${ProxyState.backgroundUrl})`
}

export default class ImageController {
   constructor() {
      document.body.style.backgroundSize = 'cover'
      // document.body.style.transition = 'background 1s linear'
      ProxyState.on('backgroundUrl', _draw)
      this.getBackgroundImage()
   }

   getBackgroundImage() {
      imageService.getBackgroundImage()
   }
}