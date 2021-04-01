class LogInPage {
    get pageUrl() {
        return ('https://github.com/login');
    }

    get userNameInput() {
        return $('[id="login_field"]');
    }

    get userPassInput() {
        return $('[id="password"]');
    }

    get signInBtn() {
        return $('input[type="submit"]');
    }

    get accountUsername() {
        return ('webtestAndrii');
    }

    get accountPass() {
        return ('Vtkmybr~123');
    }

    get accountEmail() {
        return ('bezkrovnyyav+11@gmail.com');
    }

    get passResetLink() {
        return $('a[href="/password_reset"]');
    }
}


module.exports = new LogInPage();