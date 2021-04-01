class MainPage {

    get pageUrl() {
        return ('https://github.com/');
    }
	 get signUpBtn() {
        return $('button[type="submit"]');
    }
	
	  get lowerUserEmailInput() {
        return $('[id="user_email"]');
    }  


    get signInBtn() {
        return $('a[href="/login"]');
    }

    get dropDownMenuBtn() {
        return $('[aria-label="View profile and more"]');
    }

    get yourProfileLink() {
        return $('a[data-ga-click="Header, go to profile, text:your profile"]');
    }

	get mainPageLink() {
        return $('a[href="https://github.com/"]');
    }
	
    get whyGitHubDropdownListLink() {
        return $('//summary[contains(text(), "Why GitHub")]');
    }

    get whyGitHubDropdownList() {
        return $('a[href="/features"][data-ga-click="(Logged out) Header, go to Features"]');
    }

    get exploreDropdownListLink() {
        return $('//summary[contains(text(), "Explore")]');
    }

    get exploreDropdownList() {
        return $('a[href="/topics"][data-ga-click="(Logged out) Header, go to Topics"]');
    }

    get pricingDropdownListLink() {
        return $('//summary[contains(text(), "Pricing")]');
    }

    get pricingDropdownList() {
        return $('a[href="/pricing"][data-ga-click="(Logged out) Header, go to Pricing"]');
    }

    get exploreGithubDropdownListLink() {
        return $('a[href="/explore"]');
    }

    get searchInput() {
        return $('input[placeholder="Search GitHub"]');
    }

    	
	get pricingPlansItem() {
        return $('a[data-ga-click="(Logged out) Header, go to Pricing"]');
    }

	 get EntepriseWorkBtn() {
        return $('a[href="/enterprise"]');
    }
	
    
    get careersFooterLink() {
        return $('a[href="/about/careers"]');
    }

}

module.exports = new MainPage();