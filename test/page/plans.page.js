class PlansPage {
    get joinForFreeBtn() {
        return $('//a[contains(text(), "Join for free")]');
    }

    get userNameInput() {
        return $('[id="user_login"]');
    }

    get userEmailInput() {
        return $('[id="user_email"]');
    }

    get userPassInput() {
        return $('[id="user_password"]');
    }

    get emailPreferencesCheckBox() {
        return $('[id="all_emails"]');
    }
}

module.exports = new PlansPage();