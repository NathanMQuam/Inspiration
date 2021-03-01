import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _draw () {
    document.getElementById( 'quote' ).innerHTML = quoteService.Template
}

export default class QuoteController {
    constructor() {
        ProxyState.on( 'quote', _draw )
        this.getQuote()
    }

    getQuote () {
        quoteService.getQuote()
    }
}