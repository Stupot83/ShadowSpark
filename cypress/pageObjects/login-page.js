import { elementIsVisible, clickElement } from "../helpers/helpers";

const formHeader = "#formHeader";
const emailHeader = "#emailHeader";
const passwordHeader = "#passwordHeader";
const signInButton = "#signInButton";
const redirectMessage = "#redirectMessage";
const registerLink = "#registerLink";
const emailInput = "#email";
const passwordInput = "#password";

function checkLoginUrl() {
    cy.url().should('eq', 'http://localhost:3000/login');
}

function formHeaderIsVisible() {
    elementIsVisible(formHeader);
}

function checkFormHeaderText() {
    cy.get(formHeader).should('have.text', 'Login');
}

function emailHeaderIsVisible() {
    elementIsVisible(emailHeader);
}

function checkEmailHeaderText() {
    cy.get(emailHeader).should('have.text', 'Email');
}

function passwordHeaderIsVisible() {
    elementIsVisible(passwordHeader);
}

function checkPasswordHeaderText() {
    cy.get(passwordHeader).should('have.text', 'Password');
}

function checkSignInButton() {
    elementIsVisible(signInButton);
}

function checkSignInButtonText() {
    cy.get(signInButton).should('have.text', 'Sign-In');
}

function redirectMessageIsVisible() {
    elementIsVisible(redirectMessage);
}

function checkRedirectMessageText() {
    cy.get(redirectMessage).should('have.text', `Don't have an account? Register`);
}

function registerLinkIsVisible() {
    elementIsVisible(registerLink);
}

function checkRegisterLinkText() {
    cy.get(registerLink).should('have.text', 'Register');
}

function fillEmailField() {
    cy.get(emailInput).type("sergei@comparethemeerkat.com");
}

function fillPasswordField() {
    cy.get(passwordInput).type("sergeisergeisergei");
}

function submitLoginForm() {
    clickElement(signInButton);
}

module.exports = {
    checkLoginUrl,
    formHeaderIsVisible,
    checkFormHeaderText,
    emailHeaderIsVisible,
    checkEmailHeaderText,
    passwordHeaderIsVisible,
    checkPasswordHeaderText,
    checkSignInButton,
    checkSignInButtonText,
    redirectMessageIsVisible,
    checkRedirectMessageText,
    registerLinkIsVisible,
    checkRegisterLinkText,
    fillEmailField,
    fillPasswordField,
    submitLoginForm
};