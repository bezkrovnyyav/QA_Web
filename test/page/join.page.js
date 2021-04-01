class JoinPage {
    get pageUrl() {
        return ('https://github.com/join');
    }
		
	get upperUserNameInput() {
        return $('[id=user_login]');
    }

    get upperUserEmailInput() {
        return $('[id=user_email]');
    }

    get upperUserPassInput() {
        return $('[id="user_password"]');
    }

    get checkBoxBtn() {
        return $('//*[@id="all_emails"]');
	}
	
    get pageHeading() {
        return ($('//h1[text()="Create your account"]'));
    }
}


module.exports = new JoinPage();