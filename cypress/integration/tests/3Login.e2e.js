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
            displayPage.clickCreateStoryButton();
        });

        it("then the url is correct", () => {
            displayPage.checkDisplayUrl();
        });

        it("then the createStoryHeader is set properly", () => {
            displayPage.createStoryHeaderIsVisible();
        });

        it('the createStoryHeader should contain the correct text', () => {
            displayPage.checkCreateStoryHeaderText();
        });

        it("then the createStoryName is set properly", () => {
            displayPage.createStoryNameIsVisible();
        });

        it('the createStoryName should contain the correct text', () => {
            displayPage.checkCreateStoryNameText();
        });

        it("then the storyName is set properly", () => {
            displayPage.storyNameIsVisible();
        });

        it('the storyName should contain the correct text', () => {
            displayPage.checkStoryNameText();
        });

        it("then the mateymabobsButton is set properly", () => {
            displayPage.mateymabobsButtonIsVisible();
        });

        it('the mateymabobsButton should contain the correct text', () => {
            displayPage.checkMateymabobsButtonText();
        });

        it("then the mateyNameLabel is set properly", () => {
            displayPage.mateyNameLabelIsVisible();
        });

        it('the mateyNameLabel should contain the correct text', () => {
            displayPage.checkMateyNameLabelText();
        });

        it("then the mateyEmailLabel is set properly", () => {
            displayPage.mateyEmailLabelIsVisible();
        });

        it('the mateyEmailLabel should contain the correct text', () => {
            displayPage.checkMateyEmailLabelText();
        });

        it("then the removeMateyButton is set properly", () => {
            displayPage.removeMateyButtonIsVisible();
        });

        it('the removeMateyButton should contain the correct text', () => {
            displayPage.checkRemoveMateyButtonText();
        });
    });

    describe('When the user fills in the Create Story Popup', () => {

        it("then the url is correct", () => {
            displayPage.checkDisplayUrl();
        });

        it('the story name field is filled in correctly', () => {
            displayPage.fillStoryNameField();
        });

        it('the matey name field is filled in correctly', () => {
            displayPage.fillMateyNameField();
        });

        it('the matey email field is filled in correctly', () => {
            displayPage.fillMateyEmailField();
        });
    });

    describe('When the user clicks to create the story', () => {

        before(() => {
            displayPage.clickPopupCreateStoryButton();
        });

        it("then the url is correct", () => {
            displayPage.checkDisplayUrl();
        });

        it("then the storyTitle is set properly", () => {
            displayPage.storyTitleIsVisible();
        });

        it('the storyTitle should contain the correct text', () => {
            displayPage.checkStoryTitleText();
        });

        it("then the editStoryButton is set properly", () => {
            displayPage.editStoryButtonIsVisible();
        });

        it('the editStoryButton should contain the correct text', () => {
            displayPage.checkEditStoryButtonText();
        });

        it("then the viewStoryButton is set properly", () => {
            displayPage.viewStoryButtonIsVisible();
        });

        it('the viewStoryButton should contain the correct text', () => {
            displayPage.checkViewStoryButtonText();
        });
    });

    describe('When the user clicks to view the story', () => {
        before(() => {
            displayPage.clickViewStoryButton();
        });

        it("then the url is correct", () => {
            displayPage.checkTodoUrl();
        });

        it("then the todoPageHeader is set properly", () => {
            displayPage.todoPageHeaderIsVisible();
        });

        it('the todoPageHeader should contain the correct text', () => {
            displayPage.checkTodoPageHeaderText();
        });

        it("then the goBackButton is set properly", () => {
            displayPage.goBackButtonIsVisible();
        });

        it('the goBackButton should contain the correct text', () => {
            displayPage.checkGoBackButtonText();
        });

        it("then the createTodoButton is set properly", () => {
            displayPage.createTodoButtonIsVisible();
        });

        it('the createTodoButton should contain the correct text', () => {
            displayPage.checkCreateTodoButtonText();
        });

        it("then the pomodoroTitle is set properly", () => {
            displayPage.pomodoroTitleIsVisible();
        });

        it('the pomodoroTitle should contain the correct text', () => {
            displayPage.checkPomodoroTitleText();
        });

        it("then the pomodoroTime is set properly", () => {
            displayPage.pomodoroTimeIsVisible();
        });

        it('the pomodoroTime should contain the correct text', () => {
            displayPage.checkPomodoroTimeText();
        });

        it("then the startButton is set properly", () => {
            displayPage.startButtonIsVisible();
        });

        it('the startButton should contain the correct text', () => {
            displayPage.checkStartButtonText();
        });

        it("then the pauseButton is set properly", () => {
            displayPage.pauseButtonIsVisible();
        });

        it('the pauseButton should contain the correct text', () => {
            displayPage.checkPauseButtonText();
        });

        it("then the statusHeader is set properly", () => {
            displayPage.statusHeaderIsVisible();
        });

        it('the statusHeader should contain the correct text', () => {
            displayPage.checkStatusHeaderText();
        });

        it("then the descriptionHeader is set properly", () => {
            displayPage.descriptionHeaderIsVisible();
        });

        it('the descriptionHeader should contain the correct text', () => {
            displayPage.checkDescriptionHeaderText();
        });

        it("then the assigneeHeader is set properly", () => {
            displayPage.assigneeHeaderIsVisible();
        });

        it('the assigneeHeader should contain the correct text', () => {
            displayPage.checkAssigneeHeaderText();
        });
    });

    describe('When the user clicks to create a todo', () => {

        before(() => {
            displayPage.clickCreateTodoButton();
        });

        it("then the url is correct", () => {
            displayPage.checkTodoUrl();
        });

        it("then the popupTodoHeader is set properly", () => {
            displayPage.popupTodoHeaderIsVisible();
        });

        it('the popupTodoHeader should contain the correct text', () => {
            displayPage.checkPopupTodoHeaderText();
        });

        it("then the popupTodoDescriptionLabel is set properly", () => {
            displayPage.popupTodoDescriptionLabelIsVisible();
        });

        it('the popupTodoDescriptionLabel should contain the correct text', () => {
            displayPage.checkPopupTodoDescriptionLabelText();
        });

        it("then the popupTodoDescriptionField is set properly", () => {
            displayPage.popupTodoDescriptionFieldIsVisible();
        });

        it('the popupTodoDescriptionField should contain the correct text', () => {
            displayPage.checkPopupTodoDescriptionFieldText();
        });

        it("then the popupTodoAssigneeLabel is set properly", () => {
            displayPage.popupTodoAssigneeLabelIsVisible();
        });

        it('the popupTodoAssigneeLabel should contain the correct text', () => {
            displayPage.checkPopupTodoAssigneeLabelText();
        });

        it("then the popupTodoCreateTodoButton is set properly", () => {
            displayPage.popupTodoCreateTodoButtonIsVisible();
        });

        it('the popupTodoCreateTodoButton should contain the correct text', () => {
            displayPage.checkPopupTodoCreateTodoButtonText();
        });
    });

    describe('When the user fills in the create Todo Popup ', () => {

        it("then the url is correct", () => {
            displayPage.checkTodoUrl();
        });

        it('the todo name field is filled in correctly', () => {
            displayPage.fillTodoNameDescriptionField();
        });

        it('the assignee is selected correctly', () => {
            displayPage.selectAssignee();
        });

        it("then the user clicks to create the todo", () => {
            displayPage.clickPopupTodoCreateTodoButton();
        });
    });

    describe('When the user clicks to edit the story', () => {

        before(() => {
            cy.go('back');
            displayPage.clickEditStoryButton();
        });

        it("then the url is correct", () => {
            displayPage.checkDisplayUrl();
        });

        it("then the creator is set properly", () => {
            displayPage.creatorIsVisible();
        });

        it('the creator should contain the correct text', () => {
            displayPage.checkCreatorText();
        });
    });

    describe('When the user changes the story name and removes the mateymabob', () => {

        before(() => {
            displayPage.changeStoryName();
            displayPage.clickRemoveMateyButton();
        });

        it("then the url is correct", () => {
            displayPage.checkDisplayUrl();
        });

        it("then the user clicks the update story button", () => {
            displayPage.clickPopupUpdateStoryButton();
        });

        it("then the url is correct", () => {
            landingPage.clickLoginButton();
            loginPage.fillEmailField();
            loginPage.fillPasswordField();
            loginPage.submitLoginForm();
            displayPage.checkDisplayUrl();
        });

        it('the storyTitle should contain the correct text', () => {
            displayPage.checkStoryTitleChangedText();
        });
    });

    describe('When the user clicks to delete the story', () => {

        before(() => {
            displayPage.clickEditStoryButton();
        });

        it("then the url is correct", () => {
            displayPage.checkDisplayUrl();
        });

        it("then the user clicks the delete story button", () => {
            displayPage.clickPopupDeleteStoryButton();
        });

        it("then the noStoriesHeader is set properly", () => {
            displayPage.noStoriesHeaderIsVisible();
        });
    });
});