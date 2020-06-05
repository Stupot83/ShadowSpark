import { elementIsVisible, clickElement } from "../helpers/helpers";

const hamburger = "#hamburger";
const navTitle = "#navTitle";
const accountButton = "#accountButton";
const emailAddress = "#emailAddress";
const storyPageHeader = "#storyPageHeader";
const noStoriesHeader = "#noStoriesHeader";
const holidayLogo = "#holidayLogo";
const createStoryButton = "#createStoryButton";
const logoMenu = "#logoMenu";
const homeIcon = "#homeIcon";
const homeHeader = "#homeHeader";
const signOutIcon = "#signOutIcon";
const signOutHeader = "#signOutHeader";
const settingsIcon = "#settingsIcon";
const settingsHeader = "#settingsHeader";
const storiesIcon = "#storiesIcon";
const storiesHeader = "#storiesHeader";
const chevron = "#chevron";
const accountIcon = "#accountIcon";

function checkDisplayUrl() {
 cy.url().should('eq', 'http://localhost:3000/display'); 
}

function hamburgerIsVisible() {
 elementIsVisible(hamburger);
}

function navTitleIsVisible() {
 elementIsVisible(navTitle);
}

function checkNavTitleText() {
 cy.get(navTitle).should('have.text', 'ShadowSpark UI');
}

function accountButtonIsVisible() {
 elementIsVisible(accountButton);
}

function emailAddressIsVisible() {
 elementIsVisible(emailAddress);
}

function checkEmailAddressText() {
 cy.get(emailAddress).should('have.text', 'dave@dave.com');
}

function storyPageHeaderIsVisible() {
 elementIsVisible(storyPageHeader);
}

function checkStoryPageHeaderText() {
 cy.get(storyPageHeader).should('have.text', 'Current Stories');
}

function noStoriesHeaderIsVisible() {
 elementIsVisible(noStoriesHeader);
}

function checkNoStoriesHeaderText() {
 cy.get(noStoriesHeader).should('have.text', 'No current stories - are you on holibobs?');
}

function holidayLogoIsVisible() {
 elementIsVisible(holidayLogo);
}

function createStoryButtonIsVisible() {
 elementIsVisible(createStoryButton);
}

function checkCreateStoryButtonText() {
 cy.get(createStoryButton).should('have.text', 'Create Story');
}

function clickHamburger() {
 clickElement(hamburger);
}

function logoMenuIsVisible() {
 elementIsVisible(logoMenu);
}

function homeIconIsVisible() {
 elementIsVisible(homeIcon);
}

function checkHomeHeaderText() {
 cy.get(homeHeader).should('have.text', 'Home');
}

function signOutIconIsVisible() {
 elementIsVisible(signOutIcon);
}

function checkSignOutHeaderText() {
 cy.get(signOutHeader).should('have.text', 'Sign-out');
}

function settingsIconIsVisible() {
 elementIsVisible(settingsIcon);
}

function checkSettingsHeaderText() {
 cy.get(settingsHeader).should('have.text', 'Dark Mode');
}

function storiesIconIsVisible() {
 elementIsVisible(storiesIcon);
}

function checkStoriesHeaderText() {
 cy.get(storiesHeader).should('have.text', 'Stories');
}

function clickChevron() {
 clickElement(chevron);
}

function clickAccount() {
 clickElement(accountIcon);
}

function clickShadowSparkUI() {
 clickElement(navTitle);
}

module.exports = {
 checkDisplayUrl,
 hamburgerIsVisible,
 navTitleIsVisible,
 checkNavTitleText,
 accountButtonIsVisible,
 emailAddressIsVisible,
 checkEmailAddressText,
 storyPageHeaderIsVisible,
 checkStoryPageHeaderText,
 noStoriesHeaderIsVisible,
 checkNoStoriesHeaderText,
 holidayLogoIsVisible,
 createStoryButtonIsVisible,
 checkCreateStoryButtonText,
 clickHamburger,
 logoMenuIsVisible,
 homeIconIsVisible,
 checkHomeHeaderText,
 signOutIconIsVisible,
 checkSignOutHeaderText,
 settingsIconIsVisible,
 checkSettingsHeaderText,
 storiesIconIsVisible,
 checkStoriesHeaderText,
 clickChevron,
 clickAccount,
 clickShadowSparkUI
};


