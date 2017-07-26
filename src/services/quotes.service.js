var QuotesService = (function () {
    function QuotesService() {
        this.favoriteQuotes = [];
    }
    QuotesService.prototype.addQuoteToFavorites = function (quote) {
        this.favoriteQuotes.push(quote);
    };
    QuotesService.prototype.removeQuoteToFavorites = function (quote) {
        var position = this.favoriteQuotes.findIndex(function (quoteElem) {
            return quoteElem.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    };
    QuotesService.prototype.getFavoriteQuotes = function () {
        return this.favoriteQuotes.slice();
    };
    return QuotesService;
}());
export { QuotesService };
//# sourceMappingURL=quotes.service.js.map