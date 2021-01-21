/// <reference types="Cypress"/>


describe('Content submitted rejected count', function () {

    var total = 0
    var total1 = 0
    var total2 = 0
    var total3 = 0
    var total4 = 0
    var total5 = 0
    var total6 = 0
    it("Content submitted rejected calculations", function () {

        cy.visit(Cypress.env("stagingAdmin"))
        cy.get('#email').type('david@assertqa.com')
        cy.wait(1000)
        cy.get('#password').type('Dreamteam2020_')
        cy.get('#loginBtn').click()
        //cy.wait(3000)
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        //cy.wait(3000)
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
        
        cy.get('tbody > :nth-child(26) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(26) > :nth-child(3) > .tracking-link').then(($body) => {

            if ($body.text().includes('0')) {

                cy.get(':nth-child(26) > :nth-child(3) > .tracking-link').should('have.text', '0')
            }
            else {
                cy.get(':nth-child(26) > :nth-child(3) > .tracking-link').invoke('attr', 'href').then(myLink => {
                    cy.visit(myLink);
                    // cy.log(myLink)
                })
                cy.get('#order_tracking_phases_datatables_length > label > select').select('1000', { force: true })



                cy.get('.sorting_1', { timeout: 20000 }).should('be.visible')
                cy.get('#order_tracking_phases_datatables').find('.sorting_1')
                    .then(sorting => {
                        const sortingCount = Cypress.$(sorting).length;
                        expect(sorting).to.have.length(sortingCount);
                        total = total + sortingCount

                    })//.then(function () {
                //     cy.log(total)
                // })


            }
        })


        cy.visit(Cypress.env("stagingAdmin"))

        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
        
        cy.log(total)
        cy.get('tbody > :nth-child(26) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
            expect(total).to.equal(newOrderCount)
        })

    })
    it("Content submitted rejected col 1 calculations", function () {
    
        cy.visit(Cypress.env("stagingAdmin"))
        cy.get('#email').type('david@assertqa.com')
        cy.wait(1000)
        cy.get('#password').type('Dreamteam2020_')
        cy.get('#loginBtn').click()
        //cy.wait(3000)
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        //cy.wait(3000)
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
        cy.get('tbody > :nth-child(26) > :nth-child(4)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(26) > :nth-child(4) > .tracking-link').then(($body) => {
    
            if ($body.text().includes('0')) {
    
                cy.get(':nth-child(26) > :nth-child(4) > .tracking-link').should('have.text', '0')
            }
            else {
                cy.get(':nth-child(26) > :nth-child(4) > .tracking-link').invoke('attr', 'href').then(myLink => {
                    cy.visit(myLink);
                    // cy.log(myLink)
                })
                cy.get('#order_tracking_phases_datatables_length > label > select').select('1000', { force: true })
    
    
    
                cy.get('.sorting_1', { timeout: 20000 }).should('be.visible')
                cy.get('#order_tracking_phases_datatables').find('.sorting_1')
                    .then(sorting => {
                        const sortingCount = Cypress.$(sorting).length;
                        expect(sorting).to.have.length(sortingCount);
                        total1 = total1 + sortingCount
    
                    })//.then(function () {
                //     cy.log(total)
                // })
    
    
            }
        })
    
    
        cy.visit(Cypress.env("stagingAdmin"))
    
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
    
        cy.log(total1)
        cy.get('tbody > :nth-child(26) > :nth-child(4)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
            expect(total1).to.equal(newOrderCount)
        })
    
    })
    it("Content submitted rejected col 2 calculations", function () {
    
        cy.visit(Cypress.env("stagingAdmin"))
        cy.get('#email').type('david@assertqa.com')
        cy.wait(1000)
        cy.get('#password').type('Dreamteam2020_')
        cy.get('#loginBtn').click()
        //cy.wait(3000)
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        //cy.wait(3000)
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
        cy.get('tbody > :nth-child(26) > :nth-child(5)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(26) > :nth-child(5) > .tracking-link').then(($body) => {
    
            if ($body.text().includes('0')) {
    
                cy.get(':nth-child(26) > :nth-child(5) > .tracking-link').should('have.text', '0')
            }
            else {
                cy.get(':nth-child(26) > :nth-child(5) > .tracking-link').invoke('attr', 'href').then(myLink => {
                    cy.visit(myLink);
                    // cy.log(myLink)
                })
                cy.get('#order_tracking_phases_datatables_length > label > select').select('1000', { force: true })
    
    
    
                cy.get('.sorting_1', { timeout: 20000 }).should('be.visible')
                cy.get('#order_tracking_phases_datatables').find('.sorting_1')
                    .then(sorting => {
                        const sortingCount = Cypress.$(sorting).length;
                        expect(sorting).to.have.length(sortingCount);
                        total2 = total2 + sortingCount
    
                    })//.then(function () {
                //     cy.log(total)
                // })
    
    
            }
        })
    
    
        cy.visit(Cypress.env("stagingAdmin"))
    
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
    
        cy.log(total2)
        cy.get('tbody > :nth-child(26) > :nth-child(5)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
            expect(total2).to.equal(newOrderCount)
        })
    
    })
    it("Content submitted rejected col 3 calculations", function () {
    
        cy.visit(Cypress.env("stagingAdmin"))
        cy.get('#email').type('david@assertqa.com')
        cy.wait(1000)
        cy.get('#password').type('Dreamteam2020_')
        cy.get('#loginBtn').click()
        //cy.wait(3000)
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        //cy.wait(3000)
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
        cy.get('tbody > :nth-child(26) > :nth-child(6)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(26) > :nth-child(6) > .tracking-link').then(($body) => {
    
            if ($body.text().includes('0')) {
    
                cy.get(':nth-child(26) > :nth-child(6) > .tracking-link').should('have.text', '0')
            }
            else {
                cy.get(':nth-child(26) > :nth-child(6) > .tracking-link').invoke('attr', 'href').then(myLink => {
                    cy.visit(myLink);
                    // cy.log(myLink)
                })
                cy.get('#order_tracking_phases_datatables_length > label > select').select('1000', { force: true })
    
    
    
                cy.get('.sorting_1', { timeout: 20000 }).should('be.visible')
                cy.get('#order_tracking_phases_datatables').find('.sorting_1')
                    .then(sorting => {
                        const sortingCount = Cypress.$(sorting).length;
                        expect(sorting).to.have.length(sortingCount);
                        total3 = total3 + sortingCount
    
                    })//.then(function () {
                //     cy.log(total)
                // })
    
    
            }
        })
    
    
        cy.visit(Cypress.env("stagingAdmin"))
    
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
    
        cy.log(total3)
        cy.get('tbody > :nth-child(26) > :nth-child(6)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
            expect(total3).to.equal(newOrderCount)
        })
    
    })
    it("Content submitted rejected col 4 calculations", function () {
    
        cy.visit(Cypress.env("stagingAdmin"))
        cy.get('#email').type('david@assertqa.com')
        cy.wait(1000)
        cy.get('#password').type('Dreamteam2020_')
        cy.get('#loginBtn').click()
        //cy.wait(3000)
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        //cy.wait(3000)
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
        cy.get('tbody > :nth-child(26) > :nth-child(7)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(26) > :nth-child(7) > .tracking-link').then(($body) => {
    
            if ($body.text().includes('0')) {
    
                cy.get(':nth-child(26) > :nth-child(7) > .tracking-link').should('have.text', '0')
            }
            else {
                cy.get(':nth-child(26) > :nth-child(7) > .tracking-link').invoke('attr', 'href').then(myLink => {
                    cy.visit(myLink);
                    // cy.log(myLink)
                })
                cy.get('#order_tracking_phases_datatables_length > label > select').select('1000', { force: true })
    
    
    
                cy.get('.sorting_1', { timeout: 20000 }).should('be.visible')
                cy.get('#order_tracking_phases_datatables').find('.sorting_1')
                    .then(sorting => {
                        const sortingCount = Cypress.$(sorting).length;
                        expect(sorting).to.have.length(sortingCount);
                        total4 = total4 + sortingCount
    
                    })//.then(function () {
                //     cy.log(total)
                // })
    
    
            }
        })
    
    
        cy.visit(Cypress.env("stagingAdmin"))
    
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
    
        cy.log(total4)
        cy.get('tbody > :nth-child(26) > :nth-child(7)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
            expect(total4).to.equal(newOrderCount)
        })
    
    })
    it("Content submitted rejected col 5 calculations", function () {
    
        cy.visit(Cypress.env("stagingAdmin"))
        cy.get('#email').type('david@assertqa.com')
        cy.wait(1000)
        cy.get('#password').type('Dreamteam2020_')
        cy.get('#loginBtn').click()
        //cy.wait(3000)
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        //cy.wait(3000)
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
        cy.get('tbody > :nth-child(26) > :nth-child(8)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(26) > :nth-child(8) > .tracking-link').then(($body) => {
    
            if ($body.text().includes('0')) {
    
                cy.get(':nth-child(26) > :nth-child(8) > .tracking-link').should('have.text', '0')
            }
            else {
                cy.get(':nth-child(26) > :nth-child(8) > .tracking-link').invoke('attr', 'href').then(myLink => {
                    cy.visit(myLink);
                    // cy.log(myLink)
                })
                cy.get('#order_tracking_phases_datatables_length > label > select').select('1000', { force: true })
    
    
    
                cy.get('.sorting_1', { timeout: 20000 }).should('be.visible')
                cy.get('#order_tracking_phases_datatables').find('.sorting_1')
                    .then(sorting => {
                        const sortingCount = Cypress.$(sorting).length;
                        expect(sorting).to.have.length(sortingCount);
                        total5 = total5 + sortingCount
    
                    })//.then(function () {
                //     cy.log(total)
                // })
    
    
            }
        })
    
    
        cy.visit(Cypress.env("stagingAdmin"))
    
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
    
        cy.log(total5)
        cy.get('tbody > :nth-child(26) > :nth-child(8)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
            expect(total5).to.equal(newOrderCount)
        })
    
    })
    it("Content submitted rejected col 6 calculations", function () {
    
        cy.visit(Cypress.env("stagingAdmin"))
        cy.get('#email').type('david@assertqa.com')
        cy.wait(1000)
        cy.get('#password').type('Dreamteam2020_')
        cy.get('#loginBtn').click()
        //cy.wait(3000)
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        //cy.wait(3000)
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
        cy.get('tbody > :nth-child(26) > :nth-child(9)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(26) > :nth-child(9) > .tracking-link').then(($body) => {
    
            if ($body.text().includes('0')) {
    
                cy.get(':nth-child(26) > :nth-child(9) > .tracking-link').should('have.text', '0')
            }
            else {
                cy.get(':nth-child(26) > :nth-child(9) > .tracking-link').invoke('attr', 'href').then(myLink => {
                    cy.visit(myLink);
                    // cy.log(myLink)
                })
                cy.get('#order_tracking_phases_datatables_length > label > select').select('1000', { force: true })
    
    
    
                cy.get('.sorting_1', { timeout: 20000 }).should('be.visible')
                cy.get('#order_tracking_phases_datatables').find('.sorting_1')
                    .then(sorting => {
                        const sortingCount = Cypress.$(sorting).length;
                        expect(sorting).to.have.length(sortingCount);
                        total6 = total6 + sortingCount
    
                    })//.then(function () {
                //     cy.log(total)
                // })
    
    
            }
        })
    
    
        cy.visit(Cypress.env("stagingAdmin"))
    
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
    
        cy.log(total6)
        cy.get('tbody > :nth-child(26) > :nth-child(9)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
            expect(total6).to.equal(newOrderCount)
        })
    
    })
    it("Content submitted rejected table count good", function () {

        var col1 = 0
        var col2 = 0
        var col3 = 0
        var col4 = 0
        var col5 = 0
        var col6 = 0

        cy.visit(Cypress.env("stagingAdmin"))
        cy.get('#email').type('david@assertqa.com')
        cy.wait(1000)
        cy.get('#password').type('Dreamteam2020_')
        cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        // cy.wait(3000)
        cy.get('.text-info').click({ force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })
        cy.get('#customer_new_orders_datatables_length > label > select').select('1000', { force: true })


        cy.get('tbody > :nth-child(26) > :nth-child(4)').each(($el, index, $list) => {

            const amount = $el.text()
            col1 = Number(col1) + Number(amount)

        }).then(function () {
            cy.log(col1)
        })

        cy.get('tbody > :nth-child(26) > :nth-child(5)').each(($el, index, $list) => {

            const amount = $el.text()
            col2 = Number(col2) + Number(amount)

        }).then(function () {
            cy.log(col2)
        })

        cy.get('tbody > :nth-child(26) > :nth-child(6').each(($el, index, $list) => {

            const amount = $el.text()
            col3 = Number(col3) + Number(amount)

        }).then(function () {
            cy.log(col3)
        })
        cy.get('tbody > :nth-child(26) > :nth-child(7)').each(($el, index, $list) => {

            const amount = $el.text()
            col4 = Number(col4) + Number(amount)

        }).then(function () {
            cy.log(col4)
        })

        cy.get('tbody > :nth-child(26) > :nth-child(8)').each(($el, index, $list) => {

            const amount = $el.text()
            col5 = Number(col5) + Number(amount)

        }).then(function () {
            cy.log(col5)
        })
        cy.get('tbody > :nth-child(26) > :nth-child(9)').each(($el, index, $list) => {

            const amount = $el.text()
            col6 = Number(col6) + Number(amount)

        }).then(function () {
            cy.log(col6)
        })

        cy.get('tbody > :nth-child(26) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
            var total = col1 + col2 + col3 + col4 + col5 + col6
            expect(total).to.equal(newOrderCount)
        })

    })

})
