import searchActions from '../interactions/search_actions';
import mainPage from '../interactions/main.page';

beforeEach(() => {
    cy.visit('http://localhost:3000/');
})

describe('This suite well test the behaviour of the search functions on the site', () => {

    it('Search by name then validate search results', () => {
        //var applicantName = mainPage.getApplicantName();
        
        // check name field is displayed and enter the text julia, test data should be in a fixture.
        searchActions.enterName('julia');

        // submit the search and validate julia is filtered
        searchActions.clickSubmit();

        // validate that julia is displayed
        cy.get('.CrewMemeber-name').should('have.text', 'julia cunninghamsheffield')

    })

    it('Search by city then validate search results', () => {
        //var applicantName = mainPage.getApplicantName();
        
        // check city field is displayed and enter the text julia, test data should be in a fixture.
        searchActions.enterCity('sheffield');

        // submit the search and validate julia is filtered
        searchActions.clickSubmit();

        // validate that julia is displayed
        cy.get('.CrewMemeber-name').should('have.text', 'julia cunninghamsheffield')

    })

    it('Search by city and name then validate search results', () => {  
        // check name and fields are displayed and enter the text julia, test data should be in a fixture.
        searchActions.enterCity('sheffield');
        searchActions.enterName('julia');

        // submit the search and validate julia is filtered
        searchActions.clickSubmit();

        // validate that julia is displayed
        cy.get('.CrewMemeber-name').should('have.text', 'julia cunninghamsheffield')

    })

    // this test finds a bug, if a user has not submitted a search then the clear button does not work.

    it('Enter data into search fields then clear the data', () => {     
        // check name field is displayed and enter the text julia, test data should be in a fixture.
        searchActions.enterCity('sheffield');
        searchActions.enterName('julia');

        // click clear
        searchActions.clearFields();

        // validate no text in fields
        mainPage.getNameField().should('have.value', '');
        mainPage.getCityField().should('have.value', '');

    })

    it('Enter data into search fields, submit the search and then clear the data', () => {

        // check name field is displayed and enter the text julia, test data should be in a fixture.
        searchActions.enterCity('test');
        searchActions.enterName('test');

        // submit the search and validate julia is filtered
        searchActions.clickSubmit();

        cy.get('.CrewMember-container').should('not.exist');

        // click clear
        searchActions.clearFields();

        // validate applicants exist again
        cy.get('.CrewMember-container').should('exist');

    })


    

    
})