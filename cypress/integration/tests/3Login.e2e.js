import * as landingPage from "../../pageObjects/landing-page";
import * as loginPage from "../../pageObjects/login-page";
import * as displayPage from "../../pageObjects/display-page";

describe('When the Login page is loaded', () => {

    before(() => {
        cy.visit("/");
        landingPage.clickLoginButton();
    });

    it("then the url is correct", () => {
        loginPage.checkLoginUrl();
    });

    it("then the form header is set properly", () => {
        loginPage.formHeaderIsVisible();
    });

    it('the form header should contain the correct text', () => {
        loginPage.checkFormHeaderText();
    });

    it("then the email header is set properly", () => {
        loginPage.emailHeaderIsVisible();
    });

    it('the email header should contain the correct text', () => {
        loginPage.checkEmailHeaderText();
    });

    it('then the password header is set properly', () => {
        loginPage.passwordHeaderIsVisible();
    });

    it('the password header should contain the correct text', () => {
        loginPage.checkPasswordHeaderText();
    });

    it("should have a sign-in button", () => {
        loginPage.checkSignInButton();
    });

    it('the sign-in button should contain the correct text', () => {
        loginPage.checkSignInButtonText();
    });

    it("the redirect message should be set properly", () => {
        loginPage.redirectMessageIsVisible();
    });

    it('the redirect message should contain the correct text', () => {
        loginPage.checkRedirectMessageText();
    });

    it("the register link should be set properly", () => {
        loginPage.registerLinkIsVisible();
    });

    it('the register link should contain the correct text', () => {
        loginPage.checkRegisterLinkText();
    });

    describe('When the Login form is filled in', () => {

        it("the email field should be populated", () => {
            loginPage.fillEmailField();
        });

        it("the password field should be populated", () => {
            loginPage.fillPasswordField();
        });

        describe('When the form is submitted to login the user', () => {

            it("the form is submitted, and the user is redirected to the home page", () => {
                loginPage.submitLoginForm();
            });

        });

    });

    describe('When the user is redirected to the Display page', () => {

        it("then the url is correct", () => {
            displayPage.checkDisplayUrl();
        });

        it("then the hamburger icon is set properly", () => {
            displayPage.hamburgerIsVisible();
        });

        it("then the navTitle is set properly", () => {
            displayPage.navTitleIsVisible();
        });

        it('the navTitle should contain the correct text', () => {
            displayPage.checkNavTitleText();
        });

        it("then the accountButton is set properly", () => {
            displayPage.accountButtonIsVisible();
        });

        it("then the emailAddress is set properly", () => {
            displayPage.emailAddressIsVisible();
        });

        it('the emailAddress should contain the correct text', () => {
            displayPage.checkEmailAddressText();
        });

        it("then the storyPageHeader is set properly", () => {
            displayPage.storyPageHeaderIsVisible();
        });

        it('the storyPageHeader should contain the correct text', () => {
            displayPage.checkStoryPageHeaderText();
        });

        it("then the noStoriesHeader is set properly", () => {
            displayPage.noStoriesHeaderIsVisible();
        });

        it('the noStoriesHeader should contain the correct text', () => {
            displayPage.checkNoStoriesHeaderText();
        });

        it("then the holidayLogo is set properly", () => {
            displayPage.holidayLogoIsVisible();
        });

        it("then the createStoryButton is set properly", () => {
            displayPage.createStoryButtonIsVisible();
        });

        it('the createStoryButton should contain the correct text', () => {
            displayPage.checkCreateStoryButtonText();
        });

    });

    describe('When the user clicks the hamburger menu', () => {

        before(() => {
            displayPage.clickHamburger();
        });

        it("then the url is correct", () => {
            displayPage.checkDisplayUrl();
        });

        it("then the logoMenu is set properly", () => {
            displayPage.logoMenuIsVisible();
        });

        it("then the homeIcon is set properly", () => {
            displayPage.homeIconIsVisible();
        });

        it('the homeHeader should contain the correct text', () => {
            displayPage.checkHomeHeaderText();
        });

        it("then the signOutIcon is set properly", () => {
            displayPage.signOutIconIsVisible();
        });

        it('the signOutHeader should contain the correct text', () => {
            displayPage.checkSignOutHeaderText();
        });

        it("then the settingsIcon is set properly", () => {
            displayPage.settingsIconIsVisible();
        });

        it('the settingsHeader should contain the correct text', () => {
            displayPage.checkSettingsHeaderText();
        });

        it("then the storiesIcon is set properly", () => {
            displayPage.storiesIconIsVisible();
        });

        it('the storiesHeader should contain the correct text', () => {
            displayPage.checkStoriesHeaderText();
        });
    });

    describe('When the user closes the hamburger menu and opens the nav menu', () => {

        before(() => {
            displayPage.clickChevron();
            displayPage.clickAccount();
        });

        it("then the url is correct", () => {
            displayPage.checkDisplayUrl();
        });

        it('the homeHeader should contain the correct text', () => {
            displayPage.checkHomeHeaderText();
        });

        it('the signOutHeader should contain the correct text', () => {
            displayPage.checkSignOutHeaderText();
        });
    });

    describe('When the user clicks on the Create Story Button', () => {

        before(() => {
            cy.go('back');
        });

        it("then the url is correct", () => {
            displayPage.checkDisplayUrl();
        });
    });
});
