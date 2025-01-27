declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Create several Todo items via UI
       * @example
       * cy.createDefaultTodos()
       */
      createDefaultTodos(): Chainable<any>
      /**
       * Creates one Todo using UI
       * @example
       * cy.createTodo('new item')
       */
      createTodo(title: string): Chainable<any>
  
      /**
       * Command that injects Axe core library into app html.
       * @example
       *  cy.visit('/')
       *  cy.v()
       */
      addAxeCode(): Chainable<any>


      login(username: string, password: string): Chainable<any>
      getByTestId(testId: string): Chainable<any>
    }
  }