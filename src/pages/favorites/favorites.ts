import { Component } from '@angular/core';
import {Quote} from '../../data/quote.interface';
import {QuotesService} from '../../services/quotes.service';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
	quotes: Quote[];

	constructor(private quotesService: QuotesService) {}

	ionViewWillEnter() {
		this.quotes = this.quotesService.getFavoriteQuotes();
	}
}
