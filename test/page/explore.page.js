
class ExplorePage {
    get topicsNavItem() {
        return $('a[data-ga-click="Explore, go to topics, location:explore nav"]');
    }

    get topicsHeading() {
        return $('//h1[text()="Topics"]');
    }
}

module.exports = new ExplorePage();