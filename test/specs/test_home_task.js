
const faker = require('faker');
const actions = require('../actions/actions');
const mainPage = require('../page/main.page');
const joinPage = require('../page/join.page');
const logInPage = require('../page/logIn.page');
const profilePage = require('../page/profile.page');
const passwordResetPage = require('../page/password_reset.page');
const plansPage = require('../page/plans.page');
const explorePage = require('../page/explore.page');
const searchPage = require('../page/search.page');
const enteprisePage = require('../page/enteprise.page');
const careersPage = require('../page/careers.page');

describe('Final_hometask_1 is started - Andrii Bezkrovnyi', () => {
    
    it('should navigate to the Main page of github', () => {
		actions.setUrl(mainPage.pageUrl);
    });
	
	it('should navigate to the LogIn page of github', () => {
		mainPage.signUpBtn.click();
    });
	
    it('should enter username in userNameInput', () => {
        joinPage.upperUserNameInput.addValue(faker.name.firstName() + faker.name.lastName());
	});

    it('should enter email in userEmailInput', () => {
        joinPage.upperUserEmailInput.addValue(faker.internet.email());
	});

    it('should enter password in userPassInput', () => {
        joinPage.upperUserPassInput.addValue(actions.setRandomNumbers());
	});

    it('should click on Check box "Email preferences" button', () => {
       joinPage.checkBoxBtn.click();
        browser.pause(2000);
    });

    it('should expect the user is on Join Page', () => {
        actions.checkUrl(joinPage);
		browser.pause(2000);
    });

    it('should expect heading h1 "Create your account" displayed', () => {
        actions.checkIfElementDisplayed(joinPage.pageHeading);
    });
});


describe('Final_hometask_2 is started - Andrii Bezkrovnyi', () => {
    
    it('should return back to the Main page of github', () => {
        actions.setUrl(mainPage.pageUrl);
        browser.pause(2000);
    });

    it('should enter email in the email address field', () => {
        mainPage.lowerUserEmailInput.addValue(faker.internet.email());
    });
	
	it('should navigate to the LogIn page of github', () => {
		mainPage.signUpBtn.click();
    });
	
	it('should enter username in userNameInput', () => {
        joinPage.upperUserNameInput.addValue(faker.name.firstName() + faker.name.lastName());
	});
    
    it('should enter password in userPassInput', () => {
        joinPage.upperUserPassInput.addValue(actions.setRandomNumbers());
	});

    it('should click on Check box "Email preferences" button', () => {
		joinPage.checkBoxBtn.click();
        browser.pause(2000);
    });

    it('should expect the user is on Join Page', () => {
        actions.checkUrl(joinPage);
    });

    it('should expect heading h1 "Create your account" displayed', () => {
        actions.checkIfElementDisplayed(joinPage.pageHeading);
    });
});

describe('Final_hometask_3 is started - Andrii Bezkrovnyi', () => {
    
    it('should return back to the Main page of github', () => {
        actions.setUrl(mainPage.pageUrl);
        browser.pause(2000);
    })

    it('should click on Sign in button', () => {
        mainPage.signInBtn.click();
    })

    it('should expect the user redirect to Log in Page', () => {
        actions.checkUrl(logInPage);
    })

    it('should enter username of test account in userNameInput', () => {
        logInPage.userNameInput.addValue(logInPage.accountUsername);
    })

    it('should enter password of test account in userPassInput', () => {
        logInPage.userPassInput.addValue(logInPage.accountPass);
    })

    it('should click on Sign in button', () => {
        browser.pause(2000);
        logInPage.signInBtn.click();
        browser.pause(2000);
    })

    it('should click on drop-down menu button', () => {
        mainPage.dropDownMenuBtn.click();
        browser.pause(2000);
    })

    it('should click on Your profile link in drop-down menu', () => {
        mainPage.yourProfileLink.click();
        browser.pause(2000);
    })

    it('should expect the user redirect to test profile page', () => {
        expect(browser).toHaveUrl((mainPage.pageUrl + logInPage.accountUsername));
        actions.checkIfElementHasText(profilePage.accountNickname, logInPage.accountUsername);
    })
});

describe('Final_hometask_4 is started - Andrii Bezkrovnyi', () => {
    
    it('should return back to the Log in page', () => {
        actions.setUrl(logInPage.pageUrl);
        browser.pause(2000);
    })

    it('should click on Your profile link in drop-down menu', () => {
        profilePage.viewProfileLink.click();
        browser.pause(2000);
    })

    it('should click on Sign out button in drop-down menu', () => {
        profilePage.signOutBtn.click();
        browser.pause(2000);
    })

    it('should click on Sign in button', () => {
        mainPage.signInBtn.click();
        browser.pause(2000);
    })

    it('should click on Forgot password link', () => {
        logInPage.passResetLink.click();
        browser.pause(2000);
    })

    it('should expect the user redirect to Password reset Page', () => {
        actions.checkUrl(passwordResetPage);
        browser.pause(2000);
    })
});

describe('Final_hometask_5 is started - Andrii Bezkrovnyi', () => {
    
    it('should submit empty input of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.resetPassBtn.click();
        browser.pause(2000);
        actions.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(2000);
    })

    it('should enter and submit empty space string of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.emailInput.addValue('    ');
        browser.pause(2000);
        passwordResetPage.resetPassBtn.click();
        browser.pause(2000);
        actions.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(2000);
    })

    it('should enter and submit numbers of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.emailInput.addValue(actions.setRandomNumbers());
        browser.pause(2000);
        passwordResetPage.resetPassBtn.click();
        browser.pause(2000);
        actions.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(2000);
    })

    it('should enter and submit string of Password reset input and close Reset password error pop-up', () => {
        passwordResetPage.emailInput.addValue(faker.name.lastName());
        browser.pause(2000);
        passwordResetPage.resetPassBtn.click();
        browser.pause(2000);
        actions.checkIfElementDisplayed(passwordResetPage.resetPassErrorPopup);
        passwordResetPage.closeErrorMesageBtn.click();
        browser.pause(2000);
    })
});

describe('Final_hometask_6 is started - Andrii Bezkrovnyi', () => {
	
    it('should enter valid test account email and submit Password reset button', () => {
        passwordResetPage.emailInput.addValue(logInPage.accountEmail);
        browser.pause(2000);
        passwordResetPage.resetPassBtn.click();
        browser.pause(2000);
    })

    it('should expect the user redirect to Password reset Page', () => {
        actions.checkIfElementDisplayed(passwordResetPage.resetPassSuccessPopup);
        browser.pause(2000);
    })
})

describe('Final_hometask_7 is started - Andrii Bezkrovnyi', () => {

    it('should click on Main page link and navigate to the Main page of github', () => {
        
		mainPage.mainPageLink.click();
        browser.pause(2000);
    });

	it('should mouse over Why GitHub on Main page dropdown list', () => {
        mainPage.mainPageLink.moveTo();
		mainPage.whyGitHubDropdownListLink.moveTo();
        browser.pause(2000);
        actions.checkIfElementDisplayed(mainPage.whyGitHubDropdownList);
        
    });

    it('should mouse over Explore on Main page dropwown list', () => {
        mainPage.mainPageLink.moveTo();
		mainPage.exploreDropdownListLink.moveTo();
        browser.pause(2000);
		actions.checkIfElementDisplayed(mainPage.exploreDropdownList);
    });

    it('should mouse over Pricing on Main page dropwown list', () => {
		mainPage.mainPageLink.moveTo();
		mainPage.pricingDropdownListLink.moveTo();
        browser.pause(2000);
        actions.checkIfElementDisplayed(mainPage.pricingDropdownList);
    });
});

describe('Final_hometask_8 is started - Andrii Bezkrovnyi', () => {

    it('should click on Plans item in Pricing dropdown list', () => {
        mainPage.pricingPlansItem.click();
        browser.pause(2000);
    });

    it('should click on join for free button', () => {
       plansPage.joinForFreeBtn.scrollIntoView();
	   plansPage.joinForFreeBtn.click();
       browser.pause(2000);
    });

    it('should enter username in userNameInput', () => {
        plansPage.userNameInput.addValue(faker.name.firstName() + faker.name.lastName());
    })

    it('should enter email in userEmailInput', () => {
        plansPage.userEmailInput.addValue(faker.internet.email());
    });

    it('should enter password in userPassInput', () => {
        plansPage.userPassInput.addValue(actions.setRandomNumbers());
    });

    it('should click on Email preferences check box', () => {
        plansPage.emailPreferencesCheckBox.click();
        browser.pause(2000);
    });
});

describe('Final_hometask_9 is started - Andrii Bezkrovnyi', () => {

    it('should mouse over Explore on Main page dropwown list', () => {
        mainPage.mainPageLink.moveTo();
		mainPage.exploreDropdownListLink.moveTo();
        browser.pause(2000);
    });

    it('should click on Explore GitHub link in Explore dropdown list', () => {
        mainPage.exploreGithubDropdownListLink.click();
        browser.pause(3000);
    });
	
	it('should click on Topics nav item', () => {
        explorePage.topicsNavItem.click();
        browser.pause(2000);
    });

    it('should expect heading h1 "Topics" displayed', () => {
        actions.checkIfElementDisplayed(explorePage.topicsHeading);
    });
});

describe('Final_hometask_10 is started - Andrii Bezkrovnyi', () => {

    it('should enter "webdriverio" in searchInput and press enter key', () => {
        mainPage.searchInput.setValue('webdriverio');
        browser.keys('\uE007')
        browser.pause(2000);
    });

   it('should click on first link in search result list', () => {
        searchPage.firstSearchResultLink.click();
        browser.pause(2000);
    });

    it('should check if url contains "webdriverio"', () => {
        expect(browser).toHaveUrl('webdriverio', {
            'containing': true
        });
    });
});

describe('Final_hometask_11 is started - Andrii Bezkrovnyi', () => {

    it('should click on Main page link and navigate to the Main page of github', () => {
        mainPage.mainPageLink.click();
        browser.pause(1000);
    });

    it('should click on How GitHub Enteprise work button', () => {
        mainPage.EntepriseWorkBtn.click();
		browser.pause(1000);		
    });

    it('should click on Start a free trial button', () => {
		enteprisePage.githubEntepriseWorkBtn.click();
        browser.pause(1000);
    });

    it('should click on Enteprise Cloud button', () => {
        enteprisePage.entepriseCloudBtn.click();
        browser.pause(1000);
    });

    it('should enter username in userNameInput', () => {
        enteprisePage.userNameInputInCloud.addValue(faker.name.firstName() + faker.name.lastName());
		browser.pause(1000);
    });

    it('should enter email in userEmailInput', () => {
        enteprisePage.userEmailInputInCloud.addValue(faker.internet.email());
		browser.pause(1000);
    });

    it('should enter password in userPassInput', () => {
        enteprisePage.userPassInput.addValue(actions.setRandomNumbers());
		browser.pause(1000);
    });

    it('should click on Email preferences check box', () => {
        plansPage.emailPreferencesCheckBox.click();
        browser.pause(2000);
    });
});


describe('Final_hometask_12 is started - Andrii Bezkrovnyi', () => {

    it('should return back to previous window', () => {
        browser.back();
    });
	
    it('should click on Enteprise Server button', () => {
        enteprisePage.entepriseServerBtn.click();
        browser.pause(2000);
    });

    it('should enter Contact request name in contactNameInput', () => {
        enteprisePage.contactNameInput.addValue(faker.name.firstName() + faker.name.lastName());
    });

    it('should enter Contact Company in contactCompanyInput', () => {
        enteprisePage.contactCompanyInput.addValue(faker.company.companyName());
    });

    it('should enter Contact work email in contactEmailInput', () => {
        enteprisePage.contactEmailInput.addValue(faker.internet.email());
    });

    it('should enter Contact phone number in contactPhoneInput', () => {
        enteprisePage.contactPhoneInput.addValue(faker.phone.phoneNumber());
    });

    it('should click on Not sure yet radio button in Choose your installation type', () => {
        enteprisePage.notSureYetRadioBtn.click();
    });

    it('should click on Yes radio button in Other questions', () => {
        enteprisePage.answerYesAboutOtherQuestion.click();
    });

    it('should enter some random words in Other question Text area', () => {
        enteprisePage.otherQuestionTextArea.addValue("It is my hometask frol lesson #29");
    });

    it('should accept term of use', () => {
        enteprisePage.contactAgreementCheckBox.click();
        browser.pause(2000);
    });
});

describe('Final_hometask_13 is started - Andrii Bezkrovnyi', () => {

    it('should return back to previous window', () => {
        browser.back();
        browser.pause(1000);
    });

    it('should click on Main page link and navigate to the Main page of github', () => {
        mainPage.mainPageLink.click();
        browser.pause(2000);
    });

    it('should click on Careers footer link', () => {
		
        mainPage.careersFooterLink.click();
        browser.pause(2000);
    });

    it('should click on Open positions link', () => {
        careersPage.openPositionsLink.click();
        browser.pause(2000);
    });

    it('should should output text from the labels to the terminal', () => {
        console.log(`  
        First label is ${careersPage.firstLabel.getText()}
        Second label is ${careersPage.secondLabel.getText()}
        Third label is ${careersPage.thirdLabel.getText()}
        Fourth label is ${careersPage.fourthLabel.getText()}
        Fifth label is ${careersPage.fifthLabel.getText()}
        Sixth label is ${careersPage.sixthLabel.getText()}
        `)
        browser.pause(2000);
    });
})
