class SearchPage {
    get firstSearchResultLink() {
        return $('a[href="/webdriverio/webdriverio"]');
    }
}


module.exports = new SearchPage();