import {
  loadingIndicatorShouldExist,
  loadingIndicatorShouldNotExist,
} from '../utils';

describe('Feature: Podcast contents', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.staging.tigerhall.io/graphql', req => {
      if (req.body.operationName === 'GetContentCards') {
        req.alias = 'gqlGetContentCardsQuery';
        req.reply({ fixture: 'GetContentCards.json' });
      }
    });
    cy.visitApp();
  });

  it('Can see Search option', () => {
    cy.findByPlaceholderText('Type any keyword').should('exist');
  });

  it('Can view loading indicator on fetching podcast contents and can view unfiltered podcasts', () => {
    loadingIndicatorShouldExist();
    cy.wait('@gqlGetContentCardsQuery').then(() => {
      loadingIndicatorShouldNotExist();
      cy.findAllByRole('article').should('have.length', 8);
    });
  });

  it('Can view podcast content filtered based on search and can view loading indicator while filtering', () => {
    loadingIndicatorShouldExist();
    cy.wait('@gqlGetContentCardsQuery').then(() => {
      loadingIndicatorShouldNotExist();
      cy.findAllByRole('article').should('have.length', 8);
      cy.findByRole('textbox').type('{alt}hiring', { release: false });
      loadingIndicatorShouldExist();
      cy.findByRole('textbox').type('{alt}');
      loadingIndicatorShouldNotExist();
      cy.findAllByRole('article').should('have.length', 2);
    });
  });
});
