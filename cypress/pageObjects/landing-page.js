import { elementIsVisible} from "../helpers/helpers";

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

function checkLoginButton() {
    elementIsVisible(loginButton);
}

module.exports = {
    headerIsVisible,
    checkHeaderText,
    subHeaderIsVisible,
    checkSubHeaderText,
    logoIsVisible,
    checkRegisterButton,
    checkLoginButton,
};