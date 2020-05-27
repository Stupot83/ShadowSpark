import { elementIsVisible, clickElement } from "../helpers/helpers";

const header = "#header";
const subHeader = "#subHeader";
const logo = "#logo";
const registerButton = "#register";
const loginButton = "#login";

function headerIsVisible() {
    elementIsVisible(header);
}

function checkHeaderText() {
    cy.get(header).should('have.text', 'ShadowSpark UI');
}

function subHeaderIsVisible() {
    elementIsVisible(subHeader);
}

function checkSubHeaderText() {
    cy.get(subHeader).should('have.text', 'Keeping Work Simples...');
}

function logoIsVisible() {
    elementIsVisible(logo);
}

function checkRegisterButton() {
    elementIsVisible(registerButton);
}

function checkRegisterButtonText() {
    cy.get(registerButton).should('have.text', 'Register');
}

function checkLoginButton() {
    elementIsVisible(loginButton);
}

function checkLoginButtonText() {
    cy.get(loginButton).should('have.text', 'Login');
}

function clickRegisterButton() {
    clickElement(registerButton);
}

module.exports = {
    headerIsVisible,
    checkHeaderText,
    subHeaderIsVisible,
    checkSubHeaderText,
    logoIsVisible,
    checkRegisterButton,
    checkRegisterButtonText,
    checkLoginButton,
    checkLoginButtonText,
    clickRegisterButton
};