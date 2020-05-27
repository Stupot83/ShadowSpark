import * as landingPage from "../../pageObjects/landing-page";


describe('When the Landing page is loaded', () => {

  before(() => {
    cy.visit("/");
  });

  it("then the header is set properly", () => {
    landingPage.headerIsVisible();
  });

  it("then the subHeader is set properly", () => {
    landingPage.subHeaderIsVisible();
  });

  it('should have a header', () => {
    landingPage.checkHeaderText();
  });

  it('should have a sub-header', () => {
    landingPage.checkSubHeaderText();
  });

  it("should have a register button", () => {
    landingPage.checkRegisterButton();
  });

  it("should have a login button", () => {

  });

});
