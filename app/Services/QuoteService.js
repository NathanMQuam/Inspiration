import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js";

class QuoteService {
    async getQuote () {
        try {
            let res = await sandboxApi.get( 'quotes' )
            res = res.data
            ProxyState.quote = { content: res.content, author: res.author }
            console.log( ProxyState.quote );
        } catch ( error ) {
            console.error( error );
        }
    }

    get Template () {
        let qu = ProxyState.quote
        return /*html*/ `
            ${qu.content} <br/>
            <small>${qu.author}</small>
        `
    }
}

export const quoteService = new QuoteService()