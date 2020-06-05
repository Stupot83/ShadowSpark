import { elementIsVisible, clickElement } from "../helpers/helpers";

const formHeader = "#formHeader";
const nameHeader = "#nameHeader";
const emailHeader = "#emailHeader";
const passwordHeader = "#passwordHeader";
const confirmPassWordHeader = "#confirmPasswordHeader";
const signUpButton = "#signUpButton";
const redirectMessage = "#redirectMessage";
const loginLink = "#loginLink";
const nameInput = "#name";
const emailInput = "#email";
const passwordInput = "#password";
const confirmPasswordInput = "#password2";

function checkRegisterUrl() {
    cy.url().should('eq', 'http://localhost:3000/register'); 
}

function formHeaderIsVisible() {
    elementIsVisible(formHeader);
}

function checkFormHeaderText() {
    cy.get(formHeader).should('have.text', 'Register');
}

function nameHeaderIsVisible() {
    elementIsVisible(nameHeader);
}

function checkNameHeaderText() {
    cy.get(nameHeader).should('have.text', 'Name');
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

function confirmPasswordHeaderIsVisible() {
    elementIsVisible(confirmPassWordHeader);
}

function checkConfirmPasswordHeaderText() {
    cy.get(confirmPassWordHeader).should('have.text', 'Confirm Password');
}

function checkSignUpButton() {
    elementIsVisible(signUpButton);
}

function checkSignUpButtonText() {
    cy.get(signUpButton).should('have.text', 'Sign-Up');
}

function redirectMessageIsVisible() {
    elementIsVisible(redirectMessage);
}

function checkRedirectMessageText() {
    cy.get(redirectMessage).should('have.text', 'Already have an account? Login');
}

function loginLinkIsVisible() {
    elementIsVisible(loginLink);
}

function checkLoginLinkText() {
    cy.get(loginLink).should('have.text', 'Login');
}

function fillNameField() {
    cy.get(nameInput).type("Sergei");
}

function fillEmailField() {
    cy.get(emailInput).type("sergei@comparethemeerkat.com");
}

function fillPasswordField() {
    cy.get(passwordInput).type("sergeisergeisergei");
}

function fillConfirmPasswordField() {
    cy.get(confirmPasswordInput).type("sergeisergeisergei");
}

function fillSecondNameField() {
    cy.get(nameInput).type("Aleksandr");
}

function fillSecondEmailField() {
    cy.get(emailInput).type("aleksandr@comparethemeerkat.com");
}

function fillSecondPasswordField() {
    cy.get(passwordInput).type("aleksandraleksandr");
}

function fillSecondConfirmPasswordField() {
    cy.get(confirmPasswordInput).type("aleksandraleksandr");
}

function submitRegistrationForm() {
    clickElement(signUpButton);
}

module.exports = {
    checkRegisterUrl,
    formHeaderIsVisible,
    checkFormHeaderText,
    nameHeaderIsVisible,
    checkNameHeaderText,
    emailHeaderIsVisible,
    checkEmailHeaderText,
    passwordHeaderIsVisible,
    checkPasswordHeaderText,
    confirmPasswordHeaderIsVisible,
    checkConfirmPasswordHeaderText,
    checkSignUpButton,
    checkSignUpButtonText,
    redirectMessageIsVisible,
    checkRedirectMessageText,
    loginLinkIsVisible,
    checkLoginLinkText,
    fillNameField,
    fillEmailField,
    fillPasswordField,
    fillConfirmPasswordField,
    fillSecondNameField,
    fillSecondEmailField,
    fillSecondPasswordField,
    fillSecondConfirmPasswordField,
    submitRegistrationForm
};