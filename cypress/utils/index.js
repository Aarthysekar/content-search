import { LoadingText } from '../constants'

// Check if loading indicator exists
export const shouldLoadingIndicatorExists = () => {
    cy.findByAltText(LoadingText).should('exist')
}

// Check if loading indicator does not exists
export const shouldLoadingIndicatorNotExists = () => {
    cy.findByAltText(LoadingText).should('not.exist')
}