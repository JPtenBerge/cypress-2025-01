# Lab 4. Last steps

In this exercise, you'll use additional Cypress features to get the most out of your tests. You'll start out making testdata from fixtures available through an alias. You'll also use some fancy TypeScript code for working with test data and be using this data while intercepting an HTTP request.

## Setup

This lab uses the same setup as the last lab. If you've still got this running, you're all good. In case you haven't, below are the instructions once more:



Host the client demo web app on a web server somewhere. This can be easily achieved by installing an `npm` package such as `http-server` or `lite-server`

```sh
npm install --global http-server
http-server   # in the folder of the client application
```

Host the server demo web app by running:

```sh
npm install    # installs all dependencies found in package.json
node index.js
```

Finally, in `cypress/e2e/`, create a new file `demo-app.cy.ts` for creating the upcoming tests in.

## Exercise 1: use fixtures and aliases for test data

1. In the test file from the previous lab, `demo-app.cy.ts`, create a new test
1. Add a test that fills out out the form using data retrieved through a fixture
	```ts
	cy.fixture('new-product.json').as('product');
	```
	```ts
	cy.get('@product').then((product: any) => {
	```
1. Submit the form and verify that the success notification is shown

## Exercise 2: apply TypeScript for testdata

Intercept the GET-request for retrieving products and reply with some statically defined test data through a TypeScript factory function.

```ts
export function createProducts() {
	return {
		// ...
	};
}
```
