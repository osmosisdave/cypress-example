class MainPage {

    // simple page for storing the elements of a page - actions will not be done here.

    getNameField() { return cy.get('#name'); }
    getCityField() { return cy.get('#city'); }
    getSubmitButton() { return cy.get('[type="submit"]'); }
    getClearButton() { return cy.get('#filters [type="button"]'); }
    getApplicantName() { return cy.get('.CrewMemeber-name'); }
    getApplicantContainer() { return cy.get('.CrewMember-container'); }
    getUpButton() { return cy.get('.CrewMember-toolbar .CrewMember-up'); }
    getDownButton() { return cy.get('.CrewMember-toolbar [type="button"]'); }

}

export default new MainPage();