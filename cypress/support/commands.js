import '@testing-library/cypress/add-commands';

Cypress.Commands.add('visitApp', () => {
    cy.visit('http://localhost:3000/');
})