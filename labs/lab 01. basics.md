# Lab 1: Basics

In this lab, you'll set up Cypress and write your first test for one of [the TodoMVC implementations](https://todomvc.com), for example [the Knockout.js implementation](https://todomvc.com/examples/knockoutjs/).

## Set up your environment

1. Set up a working directory somewhere on your hard drive by running:
	```sh
	npm init
	```
1. Install TypeScript and Cypress
   ```sh
   npm install cypress typescript --save-dev
   ```
1. In `cypress/`, add a `tsconfig.json` file for configuring TypeScript:
	```json
	{
		"compilerOptions": {
			"target": "es2015",
			"lib": ["es2015", "dom"],
			"types": ["cypress", "node"]
		},
		"include": ["**/*.ts"]
	}
	```
1. Cypress should now be ready to go!
	```sh
	npx cypress open
	```
   In this window, clicking "E2E testing" and you'll see Cypress suggest a few basic necessary support files. By having TypeScript installed, most of these should have a `.ts` extension. Click "Continue".
1. Once you see the "Choose a Browser" screen, you should now have a `cypress` folder in your working directory with a couple of subdirectories.

   Manually add one more subdirectory to `cypress` called `e2e` and you're good to go.

## Exercise 1: test adding a todo

You will be testing whether a todo can be added. Your test will:

* Go to the page
* Type something in the `input` field and hitting `{enter}`
* Assert the todo has been added to the list
* Assert the text "x items left" reflects the newly added item

To write your first test, you'll need:

* A new file, `todo.cy.ts`, in `cypress/e2e/` to write your test in.
* `describe()` and `it()` to define tests
* `cy.visit()` to navigate to a web application
* `cy.get()` to retrieve elements, `.type()` to type content and `.should()` to assert

Open the Cypress App and run your test. If your test doesn't magically work on the first go, fix whatever is ailing and run it again.

## Exercise 2: more testing

Write one more test, and there's lots to choose from:

* whether the filters below properly filter the list
* whether a todo can be marked as done
* whether the "Clear completed" button functions correctly

Note that removing a todo from the list is a challenge. Hovering over a todo-item triggers a DOM update for the remove button.
