class CareersPage {
    get openPositionsLink() {
        return $('[href="#positions"]');
    }

    get firstLabel() {
        return $('//div[1]/div/button/h3');
    }

    get secondLabel() {
        return $('//div[2]/div/button/h3');
    }

    get thirdLabel() {
        return $('//div[3]/div/button/h3');
    }

    get fourthLabel() {
        return $('//div[4]/div/button/h3');
    }

    get fifthLabel() {
        return $('//div[5]/div/button/h3');
    }

    get sixthLabel() {
        return $('//div[6]/div/button/h3');
    }
}


module.exports = new CareersPage();