import { Component } from '@angular/core';
import {NavParams, AlertController} from 'ionic-angular';
import {Quote} from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
	quoteGroup: {category: string, quotes: Quote[], icon: string}[];

	constructor(private navParams: NavParams, private alertCtrl: AlertController) {}

	ionViewDidLoad() {
		this.quoteGroup = this.navParams.data;
	}

	onAddToFavorite(selectedQuote: Quote) {
		const alert = this.alertCtrl.create({
			title: 'Add Quote',
			subTitle: 'Are you sure?',
			message: 'Are you sure you want to add the quote?',
			buttons: [
				{ 
					text: 'Yes, go ahead', 
					handler: () => {
						console.log('ok');
					}
				},
				{ 
					text: 'No, thanks',
					role: 'cancel',
					handler: () => {
						console.log('canceled');
					}
				},
			]
		});

		alert.present();
	}
}
