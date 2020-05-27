import * as landingPage from "../../pageObjects/landing-page";

describe('When the Landing page is loaded', () => {

  before(() => {
    cy.visit("/");
  });

  it("then the url is correct", () => {
    landingPage.checkLandingUrl();
});

  it("then the header is set properly", () => {
    landingPage.headerIsVisible();
  });

  it('the header should contain the correct text', () => {
    landingPage.checkHeaderText();
  });

  it("then the subHeader is set properly", () => {
    landingPage.subHeaderIsVisible();
  });

  it('the subHeader should contain the correct text', () => {
    landingPage.checkSubHeaderText();
  });

  it("the logo should be set properly", () => {
    landingPage.logoIsVisible();
  });

  it("should have a register button", () => {
    landingPage.checkRegisterButton();
  });

  it('the register button should contain the correct text', () => {
    landingPage.checkRegisterButtonText();
  });

  it("should have a login button", () => {
    landingPage.checkLoginButton();
  });

  it('the login button should contain the correct text', () => {
    landingPage.checkLoginButtonText();
  });

});
