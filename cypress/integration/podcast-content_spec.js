describe('Feature: Podcast contents', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('Can see Search option', () => {
        cy.findByPlaceholderText('Type any keyword').should('exist');
    })
})