

describe('Mijn eigen testsuite', () => {
    it('works', () => {
        cy.visit('https://docs.cypress.io/app/tooling/typescript-support');

        cy.get('h1').should('have.text', 'TypeScript Support');
        cy.get('h1').should('be.visible');
        cy.get('h1').should('exist');

        cy.get('.announcementBar_mb4j button').click();
        

        console.log('whoa!');
        cy.log('meer whoa!');

        // cy.get('h1').should('', 'TypeScript Support');
        // cy.get('h1').should('', 'TypeScript Support');
    });
})