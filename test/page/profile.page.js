class ProfilePage {
    get accountNickname() {
        return $('h1 span[itemprop="additionalName"]');
    }

    get viewProfileLink() {
        return $('summary[aria-label="View profile and more"]');
    }

    get signOutBtn() {
        return $('button[class="dropdown-item dropdown-signout"]');
    }

    get signInBtn() {
        return $('a[href="/login"]');
    }

}

module.exports = new ProfilePage();