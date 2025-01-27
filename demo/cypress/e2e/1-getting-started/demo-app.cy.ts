describe('Demo app', () => {

    beforeEach(() => {
        // voor test "aliases stuff"
        // cy.visit('http://127.0.0.1:8080/#/form-with-network');
        // cy.title().as('pageTitle');
    });

    it('supports shadow DOM', () => {
        cy.visit('http://127.0.0.1:8080/#/shadow-dom');

        // cy.wait(2000); // please don't ever do this

        // cy.get('app-shadow-component').shadow().then($shadow => {
        //     cy.wrap($shadow).find('.shadow-btn').click().click().click();
        //     cy.wrap($shadow).find('.counter').should('have.text', '3');
        // });

        cy.get('app-shadow-component').shadow().find('.shadow-btn').click().click().click().click().click();
        cy.get('app-shadow-component').shadow().find('.counter').should('have.text', '5');
        
    });

    it('counting met its en then', () => {
        cy.visit('http://127.0.0.1:8080/#/form');

        // cy.wait(2000); // please don't ever do this

        cy.get('table tbody tr').its('length').then(count => {
            cy.log(`Product count is now ${count}`);
        });
    });

    it('deals with timeouts', () => {
        cy.clock();
        cy.visit('http://127.0.0.1:8080/#/timers');

        cy.get('#btn-timeout').click();
        cy.tick(3000);

        // cy.wait(3000); // please don't ever do this
        cy.get(':nth-child(1) > span').should('have.text', 'Hello changing world!');
    });

    it('deals with intervals', () => {
        cy.clock();
        cy.visit('http://127.0.0.1:8080/#/timers');

        cy.get('#btn-interval').click();
        cy.tick(10500);

        // cy.wait(3000); // please don't ever do this
        cy.get('#ïnterval-seconds-passed').should('have.text', '10');
    });

    it('helps record stuff', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://127.0.0.1:8080/#/timers');
        cy.get('#btn-timeout').click();
        cy.get(':nth-child(1) > span').should('have.text', 'Hello changing world!');
        /* ==== End Cypress Studio ==== */
    });

    it('mocks network', () => {
        cy.intercept({ method: 'GET', url: 'http://localhost:5500/api/products'}, req => {
            req.reply([
                {
                    "id": 4,
                    "description": "Soundbarretje",
                    "price": 419
                },
                {
                    "id": 8,
                    "description": "Fake OnePlus 11",
                    "price": 799.99
                },
                {
                    "id": 15,
                    "description": "Alarm clock",
                    "price": 5.7
                },
                {
                    "id": 16,
                    "description": "Monitor",
                    "price": 190
                }
            ]);
        });

        cy.visit('http://127.0.0.1:8080/#/form-with-network');
        cy.get('table tbody tr').should('have.length', 4);
    });

    it('aliases stuff', () => {
        cy.get('@pageTitle').then(pageTitle => {
            cy.get('h1').should('have.text', pageTitle);
        })
    });


});