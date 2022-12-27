const locators = require('../fixtures/locators.json')

describe('London Stock Exchange Homepage', () => {
    it('Order the risers table in Homepage', () => {

        // Visit the London Stick Exchange site
        cy.visit('https://www.londonstockexchange.com/')

        // Close the Accept all cookies bar
        cy.get(locators.homepage.button_acceptAllCookies)
            .click();

        // Get the risers table into an array and order it by Price
        cy.get(locators.homepage.table_risers)
            .find('tr')
            .then(($items) => {
                const rows = Cypress._.map($items, ($el) => $el.innerText)

                cy.get('td.tab-price')
                    .should('have.length', $items.length)
                    .then(($priceColumns) => {
                        const prices = Cypress._.map($priceColumns, ($el) => parseFloat($el.innerText.replace(',', '')))

                        let arrayTable = []
                        for (let i = 0; i < rows.length; i++)
                            arrayTable.push([prices[i], rows[i]])

                        console.log('arrayTable - sorted')
                        let arraySorted = arrayTable.sort((a, b) => a[0] - b[0])
                        console.log(arraySorted)
                        cy.log(arraySorted.join(' -- '))
                    })
            })
    })
})