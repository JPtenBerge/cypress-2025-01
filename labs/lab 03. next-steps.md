# Lab 3: Next steps

## Setup

Host the client demo web app on a web server somewhere. This can be easily achieved by installing an `npm` package such as `http-server` or `lite-server`

```sh
npm install --global http-server
cd client-webapp-folder # navigate to folder of client application
http-server
```

Host the **server** demo web app by running:

```sh
cd server-webapp-folder # navigate to folder of server application
npm install             # installs all dependencies found in package.json
node index.js
```

Finally, in `cypress/e2e/`, create a new file `demo-app.cy.ts` for creating the upcoming tests in.

## Exercise 1: intercepting requests

In this exercise, you will test whether a user-friendly loading spinner is shown to the user while the products are being retrieved. The spinner can be found through the locator of `[data-test="products-list"] app-loading`.

1. Intercept a GET request and simulate that the server will not give an answer:
	```ts
	cy.intercept({ method: 'GET', url: 'http://localhost:5500/api/products' }, req => {
		req.destroy();
	});
	```
1. Navigate to your page and assert the loading spinner is being shown
1. Try adding a `cy.wait(5000)` before your assertion to make sure your intercept has succeeded

## Exercise 2: manipulating time

In this exercise, you will test whether an error message is hidden after a certain amount of time has supposedly passed. We will accomplish this without actually waiting that full amount of time.

1. Create a new test
1. Tell Cypress to manipulate the clock:
	```ts
		beforeEach(() => {
			cy.clock();
			cy.visit('...');
		});
	```
1. Intercept the form's POST request and simulate a reply with statuscode 500
1. Fill out and submit the form
1. Test that the error message is shown
1. Simulate the passage of time by calling `.tick()`
	```ts
	cy.tick(3000);
	```
1. Test that the error message is hidden

Congratulations! You've just took some next steps with Cypress.

## Exercise 3: interacting with the page

In this exercise, you will test whether a form submit will actually lead to a table row being added.

1. Create a new test
1. Navigate to the page with form
1. Count the number of products in the table
	```ts
	cy.get('[data-test="products-list"] tbody tr').its('length').then(countBefore => {

	});
	```
1. Fill out and submit the form
1. Assert that the number of products in the table has increased by one, `countBefore + 1`

And that's it! You've now learned to interact with the page. This test could however still be improved by either:

1. mocking the POST and GET request when the form is submitted. This will make your test execute faster, though you won't fully test the integration with the backend that way.
1. implementing waits that deal with the awaiting the requests/loading indicators.

If you're up to the challenge, feel free to implement one of these. For the latter choice, the npm package [cypress-wait-until](https://www.npmjs.com/package/cypress-wait-until) is very useful.
