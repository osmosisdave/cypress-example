import searchActions from '../interactions/search_actions';
import processActions from '../interactions/process_actions';
import mainPage from '../interactions/main.page';

beforeEach(() => {
    cy.visit('http://localhost:3000/');   
})


describe('These tests will validate the workflow within applied, interviewing and hired', () => {

    //most of the validation will hinge around the display of buttons to determine whether the candiate is in the correct position on the board.

    // tests will start with a filtered grid to make it easier for for testing, 4 tests should validate the scenario.

    // hired > interviewing
    // interviewing > hired
    // applied > interviewing
    // interviewing > applied

    it('Move an applicant from hired back to interviewing', () => {
        
        // data setup - not every test is the same so i can't put in beforeeach, could be smarter though.  Also checks the filter has applied.
        searchActions.enterName('julia');
        searchActions.clickSubmit();
        cy.get('.CrewMemeber-name').should('have.text', 'julia cunninghamsheffield')

        // applicant will be moved down to interviewing
        processActions.moveApplicantDown();

        // validate both buttons are displayed on applicant, meaning they're in the interviewing state.
        cy.get('.CrewMember-toolbar [type="button"]').contains('<');
        cy.get('.CrewMember-toolbar .CrewMember-up').should('be.visible');

    })

    it('Move an applicant from interviewing back to hired', () => {
        
        // data setup - not every test is the same so i can't put in beforeeach, could be smarter though.  Also checks the filter has applied.
        searchActions.enterName('julia');
        searchActions.clickSubmit();
        cy.get('.CrewMemeber-name').should('have.text', 'julia cunninghamsheffield')

        // applicant will be moved down to interviewing
        processActions.moveApplicantDown();

        // validate both buttons are displayed on applicant, meaning they're in the interviewing state.
        cy.get('.CrewMember-toolbar [type="button"]').contains('<');
        cy.get('.CrewMember-toolbar .CrewMember-up').should('be.visible');

        // applicant will be moved up to hired
        processActions.moveApplicantUp();

        // validate only down button is visible
        cy.get('.CrewMember-toolbar [type="button"]').contains('<');

    })

    it('Move an applicant from applied to interviewing', () => {
        
        // data setup - not every test is the same so i can't put in beforeeach, could be smarter though.  Also checks the filter has applied.
        searchActions.enterName('lloyd');
        searchActions.clickSubmit();
        cy.get('.CrewMemeber-name').should('have.text', 'lloyd gonzalezhereford')

        // applicant will be moved up to interviewing
        processActions.moveApplicantUp();

        // validate both buttons are displayed on applicant, meaning they're in the interviewing state.
        cy.get('.CrewMember-toolbar [type="button"]').contains('<');
        cy.get('.CrewMember-toolbar .CrewMember-up').should('be.visible');

    })

    
    it('Move an applicant from interviewing to applied', () => {
        
        // data setup - not every test is the same so i can't put in beforeeach, could be smarter though.  Also checks the filter has applied.
        searchActions.enterName('lloyd');
        searchActions.clickSubmit();
        cy.get('.CrewMemeber-name').should('have.text', 'lloyd gonzalezhereford')

        // applicant will be moved up
        processActions.moveApplicantUp();

        // validate both buttons are displayed on applicant, meaning they're in the interviewing state.
        cy.get('.CrewMember-toolbar [type="button"]').contains('<');
        cy.get('.CrewMember-toolbar .CrewMember-up').should('be.visible');


        // applicant moved down
        processActions.moveApplicantDown();
        

        // validate only up button is visible
        cy.get('.CrewMember-toolbar .CrewMember-up').should('be.visible');

    })

})