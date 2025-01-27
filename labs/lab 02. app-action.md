# Lab 2: app action

In this lab, you'll test the basic functionality of [Swag Labs](https://www.saucedemo.com/). We'll be using Cypress Studio to jot down some basic page interactions. You'll be writing an app action for the login process.

## Exercise 1: recording the login process

1. Enable Cypress Studio in `cypress.config.ts`:
   ```ts
   export default defineConfig({
     e2e: {
       // ...
       experimentalStudio: true,
     },
   });
   ```
1. Add an empty test
1. Run `npx cypress open`, select your test and click the "Add Commands to Test" button - note that it's relatively small and only visible on hover. Once in record mode:
   1. Go to [Swag Labs](https://www.saucedemo.com/)
   1. Enter the login info as provided on the bottom of the page
   1. Click the login button
1. Don't forget to copy/save the registered interactions using the buttons at the bottom of the commands list

Though it's probably not a perfect recording, the essential steps should be there. We can now go on to create an app action for the login process.

## Exercise 2: make an app action

1. In `support/commands.ts`, add a function for the login process and within in, place the recorded steps
   ```ts
   Cypress.Commands.add('login', sauceLogin);

   function sauceLogin(username = 'standard_user', password = 'secret_sauce') {
     cy.get('[data-test="username"]').type(username);

     // ...
   }
   ```
1. Make the login function known within your project:
    ```ts
    declare namespace Cypress {
      interface Chainable<Subject> {
        sauceLogin: typeof sauceLogin;
      }
    }
    ```

Done! Now go ahead and create a new file `cypress/e2e/swag-labs.cy.ts` and write a simple test that checks whether 6 products are shown. In this test, use your new and shiny app action.
