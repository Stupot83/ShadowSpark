import * as landingPage from "../../pageObjects/landing-page";
import * as registrationPage from "../../pageObjects/registration-page";

describe('When the Registration page is loaded', () => {

    before(() => {
        cy.visit("/");
        landingPage.clickRegisterButton();
    });

    it("then the url is correct", () => {
        registrationPage.checkRegisterUrl();
    });

    it("then the form header is set properly", () => {
        registrationPage.formHeaderIsVisible();
    });

    it('the form header should contain the correct text', () => {
        registrationPage.checkFormHeaderText();
    });

    it("then the name header is set properly", () => {
        registrationPage.nameHeaderIsVisible();
    });

    it('the name header should contain the correct text', () => {
        registrationPage.checkNameHeaderText();
    });

    it('then the email header is set properly', () => {
        registrationPage.emailHeaderIsVisible();
    });

    it('the email header should contain the correct text', () => {
        registrationPage.checkEmailHeaderText();
    });

    it('then the password header is set properly', () => {
        registrationPage.passwordHeaderIsVisible();
    });

    it('the password header should contain the correct text', () => {
        registrationPage.checkPasswordHeaderText();
    });


    it('then the confirm password header is set properly', () => {
        registrationPage.confirmPasswordHeaderIsVisible();
    });

    it('the confirmPassword header should contain the correct text', () => {
        registrationPage.checkConfirmPasswordHeaderText();
    });

    it("should have a sign-up button", () => {
        registrationPage.checkSignUpButton();
    });

    it('the sign-up button should contain the correct text', () => {
        registrationPage.checkSignUpButtonText();
    });

    it("the redirect message should be set properly", () => {
        registrationPage.redirectMessageIsVisible();
    });

    it('the redirect message should contain the correct text', () => {
        registrationPage.checkRedirectMessageText();
    });

    it("the login link should be set properly", () => {
        registrationPage.loginLinkIsVisible();
    });

    it('the login link should contain the correct text', () => {
        registrationPage.checkLoginLinkText();
    });

    describe('When the Registration form is filled in', () => {

        it("the name field should be populated", () => {
            registrationPage.fillNameField();
        });

        it("the email field should be populated", () => {
            registrationPage.fillEmailField();
        });

        it("the password field should be populated", () => {
            registrationPage.fillPasswordField();
        });

        it("the confirmPassword field should be populated", () => {
            registrationPage.fillConfirmPasswordField();
        });

        describe('When the form is submitted to register the dev', () => {
            
            it("the form is submitted, and the user is redirected to the login page", () => {
                registrationPage.submitRegistrationForm();
            });

        });

    });

});
