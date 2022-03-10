describe('Feature: Podcast contents', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('Can see Search option', () => {
        cy.findByPlaceholderText('Type any keyword').should('exist');
    })

    it('Can view loading indicator on fetching podcast contents and can view unfiltered podcasts', async () => {
        cy.findByAltText('Loading ...').should('exist');
        await cy.findByAltText('Loading ...').should('not.exist')
        cy.findAllByRole('article').should('have.length', 20)
    })

    it('Can view podcast content filtered based on search', async () => {
        cy.findByRole('textbox').type('hiring');
        cy.findByAltText('Loading ...').should('exist');
        await cy.findByAltText('Loading ...').should('not.exist')
        cy.findAllByRole('article').should('have.length', 2)
    })
})