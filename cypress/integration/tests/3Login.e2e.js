import * as landingPage from "../../pageObjects/landing-page";
import * as loginPage from "../../pageObjects/login-page";

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

        describe('When the form is submitted to login the dev', () => {
            
            it("the form is submitted, and the user is redirected to the home page", () => {
                loginPage.submitLoginForm();
            });

        });

    });

});
