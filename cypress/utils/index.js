import { LoadingText } from '../constants'

// Check if loading indicator exists
export const loadingIndicatorShouldExist = () => {
    cy.findByAltText(LoadingText).should('exist')
}

// Check if loading indicator does not exists
export const loadingIndicatorShouldNotExist = () => {
    cy.findByAltText(LoadingText).should('not.exist')
}