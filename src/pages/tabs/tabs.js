var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';
var TabsPage = (function () {
    function TabsPage() {
        this.favoritesPage = FavoritesPage;
        this.libraryPage = LibraryPage;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Component({
        selector: 'page-tabs',
        template: "\n\t\t<ion-tabs selectedIndex=\"1\">\n\t\t\t<ion-tab [root]=\"favoritesPage\" tabTitle=\"Favorites\" tabIcon=\"star\"></ion-tab>\n\t\t\t<ion-tab [root]=\"libraryPage\" tabTitle=\"Library\" tabIcon=\"book\"></ion-tab>\n\t\t</ion-tabs>\t\n\t"
    })
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.js.map