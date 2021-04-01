
class PasswordResetPage {
    get pageUrl() {
        return ('https://github.com/password_reset');
    }

    get emailInput() {
        return $('[id="email_field"]');
    }

    get signInBtn() {
        return $('a[href="/login"]');
    }

    get resetPassBtn() {
        return $('input[value="Send password reset email"]');
    }

    get resetPassErrorPopup() {
        return $('div[class="flash flash-full flash-error "]');
    }

    get closeErrorMesageBtn() {
        return $('button[aria-label="Dismiss this message"]');
    }

    get resetPassSuccessPopup() {
        return $('//p[contains(text(), "Check your email for a link to reset your password.")]');
    }
}

module.exports = new PasswordResetPage();