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
const createStoryHeader = "#createStoryHeader";
const createStoryName = "#createStoryName";
const storyName = "#storyName";
const mateymabobsButton = "#mateymabobsButton";
const removeMateyButton = "#removeMateyButton";
const popupCreateStoryButton = "#popupCreateStoryButton";
const storyTitle = "#storyTitle";
const editStoryButton = "#editStoryButton";
const viewStoryButton = "#viewStoryButton";
const creator = "#creator";
const popupUpdateStoryButton = "#popupUpdateStoryButton";
const popupDeleteStoryButton = "#popupDeleteStoryButton";

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
 cy.get(emailAddress).should('have.text', 'sergei@comparethemeerkat.com');
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

function clickCreateStoryButton() {
 clickElement(createStoryButton);
}

function createStoryHeaderIsVisible() {
 elementIsVisible(createStoryHeader);
}

function checkCreateStoryHeaderText() {
 cy.get(createStoryHeader).should('have.text', 'Create Story');
}

function createStoryNameIsVisible() {
 elementIsVisible(createStoryName);
}

function checkCreateStoryNameText() {
 cy.get(createStoryName).should('have.text', 'Story Name');
}

function storyNameIsVisible() {
 elementIsVisible(storyName);
}

function checkStoryNameText() {
 cy.get(storyName).should('have.text', '');
}

function mateymabobsButtonIsVisible() {
 elementIsVisible(mateymabobsButton);
}

function checkMateymabobsButtonText() {
 cy.get(mateymabobsButton).should('have.text', 'Add Mateymabobs');
}

function mateyNameLabelIsVisible() {
 cy.get('label[name="nameHeader"]');
}

function checkMateyNameLabelText() {
 cy.get('label[name="nameHeader"]').should('have.text', 'Name');
}

function mateyEmailLabelIsVisible() {
 cy.get('label[name="emailHeader"]');
}

function checkMateyEmailLabelText() {
 cy.get('label[name="emailHeader"]').should('have.text', 'Email');
}

function removeMateyButtonIsVisible() {
 elementIsVisible(removeMateyButton);
}

function checkRemoveMateyButtonText() {
 cy.get(removeMateyButton).should('have.text', 'Remove');
}

function fillStoryNameField() {
 cy.get(storyName).type("AutoSergei");
}

function fillMateyNameField() {
 cy.get('input[name="name"]').type("Aleksandr");
}

function fillMateyEmailField() {
 cy.get('input[name="email"]').type("aleksandr@comparethemeerkat.com");
}

function clickPopupCreateStoryButton() {
 clickElement(popupCreateStoryButton);
}

function storyTitleIsVisible() {
 elementIsVisible(storyTitle);
}

function checkStoryTitleText() {
 cy.get(storyTitle).should('have.text', "AutoSergei");
}

function editStoryButtonIsVisible() {
 elementIsVisible(editStoryButton);
}

function checkEditStoryButtonText() {
 cy.get(editStoryButton).should('have.text', "Edit Story");
}

function viewStoryButtonIsVisible() {
 elementIsVisible(viewStoryButton);
}

function checkViewStoryButtonText() {
 cy.get(viewStoryButton).should('have.text', "View Story");
}

function clickEditStoryButton() {
 clickElement(editStoryButton);
}

function creatorIsVisible() {
 elementIsVisible(creator);
}

function checkCreatorText() {
 cy.get(creator).should('have.text', "Created by Sergei (sergei@comparethemeerkat.com)");
}

function changeStoryName() {
 cy.get(storyName).clear();
 cy.get(storyName).type("Sergei is Best!");
}

function clickRemoveMateyButton() {
 clickElement(removeMateyButton);
}

function clickPopupUpdateStoryButton() {
 clickElement(popupUpdateStoryButton);
}

function checkStoryTitleChangedText() {
 cy.get(storyTitle).should('have.text', "Sergei is Best!");
}

function clickPopupDeleteStoryButton() {
 clickElement(popupDeleteStoryButton);
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
 clickCreateStoryButton,
 createStoryHeaderIsVisible,
 checkCreateStoryHeaderText,
 createStoryNameIsVisible,
 checkCreateStoryNameText,
 storyNameIsVisible,
 checkStoryNameText,
 mateymabobsButtonIsVisible,
 checkMateymabobsButtonText,
 mateyNameLabelIsVisible,
 checkMateyNameLabelText,
 mateyEmailLabelIsVisible,
 checkMateyEmailLabelText,
 removeMateyButtonIsVisible,
 checkRemoveMateyButtonText,
 fillStoryNameField,
 fillMateyNameField,
 fillMateyEmailField,
 clickPopupCreateStoryButton,
 storyTitleIsVisible,
 checkStoryTitleText,
 editStoryButtonIsVisible,
 checkEditStoryButtonText,
 viewStoryButtonIsVisible,
 checkViewStoryButtonText,
 clickEditStoryButton,
 creatorIsVisible,
 checkCreatorText,
 changeStoryName,
 clickRemoveMateyButton,
 clickPopupUpdateStoryButton,
 checkStoryTitleChangedText,
 clickPopupDeleteStoryButton
};


