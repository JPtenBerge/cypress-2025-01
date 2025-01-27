
describe('Todo-app', () => {
    it('works', () => {
        cy.visit('https://todomvc.com/examples/react/dist/');


        // cy.get('[data-testid="text-input"]').type('Was doen{enter}');
        cy.getByTestId('text-input').type('Was doen 2{enter}');
        cy.get('.todo-list li').should('have.length', 1);

    })
})