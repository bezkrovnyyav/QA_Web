
class Actions {
    setUrl(value) {
        return browser.url(value);
    }

    checkUrl(value) {
        return expect(browser).toHaveUrl(value.pageUrl);
    }

    checkIfElementDisplayed(value) {
        return expect(value).toBeDisplayed();
    }

    checkIfElementHasText(elem, value) {
        return expect(elem).toHaveText(value);
    }

    setRandomNumbers() {
        return Math.random().toString().slice(-15);
    }
}

module.exports = new Actions();
