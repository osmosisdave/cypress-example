beforeEach(() => {
    cy.visit('http://localhost:3000/');
})

describe('Navigate to Site and Validate Elements Exist', () => {
    it('Banner is displayed', () => {
        cy.get('.App-logo').should('be.visible');        
    })

    it('Search fields are displayed', () => {
        cy.get('#name').should('be.visible');
        cy.get('#city').should('be.visible');
        cy.get('[type="submit"]').should('be.visible');
        cy.get('[type="button"]').should('be.visible');
    })
})