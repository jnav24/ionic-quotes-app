var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
var FavoritesPage = (function () {
    function FavoritesPage(quotesService, modalCtrl) {
        this.quotesService = quotesService;
        this.modalCtrl = modalCtrl;
    }
    FavoritesPage.prototype.ionViewWillEnter = function () {
        this.quotes = this.quotesService.getFavoriteQuotes();
    };
    FavoritesPage.prototype.onViewQuote = function (quote) {
        var modal = this.modalCtrl.create(QuotePage, quote);
        modal.present();
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Component({
        selector: 'page-favorites',
        templateUrl: 'favorites.html',
    }),
    __metadata("design:paramtypes", [QuotesService, ModalController])
], FavoritesPage);
export { FavoritesPage };
//# sourceMappingURL=favorites.js.map