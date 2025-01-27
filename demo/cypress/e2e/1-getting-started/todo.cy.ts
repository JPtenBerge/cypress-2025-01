import { createTodo } from '../../factories/todoFactory';

describe('Todo-app', () => {
    beforeEach(() => {
        cy.fixture('new-todo.json').as('newTodo');
    });

    it('works', () => {
        cy.visit('https://todomvc.com/examples/react/dist/');


        // cy.get('[data-testid="text-input"]').type('Was doen{enter}');
        cy.getByTestId('text-input').type('Was doen 2{enter}');
        cy.get('.todo-list li').should('have.length', 1);

    })

    it('uses fixtures for testdata', () => {
        cy.visit('https://todomvc.com/examples/react/dist/');

        let newTodo = createTodo({ task: 'Karten' });

        // cy.get('@newTodo').then((newTodo: any) => {
        cy.getByTestId('text-input').type(`${newTodo.task}{enter}`);
        cy.getByTestId('todo-item').should('have.text', newTodo.task);
        // });
    });

    it('tries to visit multiple things', () => {
        cy.visit('https://todomvc.com/examples/react/dist/');
        cy.getByTestId('text-input').type(`qqq{enter}`);

        cy.origin('http://127.0.0.1:8080/#/form-with-network', () => {
            cy.visit('http://127.0.0.1:8080/#/form-with-network');
            cy.title().as('pageTitle');
        })
    });

    it.only('takes screenshots', () => {
        cy.visit('https://todomvc.com/examples/react/dist/');
        cy.getByTestId('text-input').type(`qqq{enter}`);

        cy.get('#root').screenshot();
    });
})

interface Todo {
    task: string;
}