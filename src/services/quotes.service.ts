import {Quote} from '../data/quote.interface';

export class QuotesService {
	private favoriteQuotes: Quote[] = [];

	addQuoteToFavorites(quote: Quote) {
		this.favoriteQuotes.push(quote);
	}

	removeQuoteToFavorites(quote: Quote) {
		const position = this.favoriteQuotes.findIndex((quoteElem: Quote) => {
			return quoteElem.id == quote.id;
		});
		this.favoriteQuotes.splice(position, 1);
	}

	getFavoriteQuotes() {
		return this.favoriteQuotes.slice();
	}
}