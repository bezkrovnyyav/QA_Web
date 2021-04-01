
class EnteprisePage {
	
	get githubEntepriseWorkBtn() {
        return $('//a[contains(text(), "Start a free trial")]');
    }

   get entepriseCloudBtn() {
        return $('.currency-container:nth-child(1) .h1');
    }
	
	get userNameInputInCloud() {
        return $('[id="user_login"]');
    }

    get userEmailInputInCloud() {
        return $('[id="user_email"]');
    }

    get entepriseServerBtn() {
        return $('.currency-container:nth-child(3) .py-4');
    }

    get userNameInput() {
        return $('[id="contact_request_name"]');
    }

    get userEmailInput() {
        return $('[id="contact_request_email"]');
    }

    get userPassInput() {
        return $('[id="user_password"]');
    }

    get emailPreferencesCheckBox() {
        return $('[id="all_emails"]');
    }

    get contactNameInput() {
        return $('[id="contact_request_name"]');
    }

    get contactCompanyInput() {
        return $('[id="contact_request_organization_name"]');
    }

    get contactEmailInput() {
        return $('[id="contact_request_email"]');
    }

    get contactPhoneInput() {
        return $('[id="contact_request_phone"]');
    }

    get notSureYetRadioBtn() {
        return $('[id="contact_request_instance_type_not_sure"]');
    }

    get answerYesAboutOtherQuestion() {
        return $('[id="questions_yes"]');
    }

    get otherQuestionTextArea() {
        return $('[id="questions-list"]');
    }

    get contactAgreementCheckBox() {
        return $('[id="contact_request_agreed_to_terms"]');
    }

    get homePageLink() {
        return $('a[href="/"]');
    }
}


module.exports = new EnteprisePage();