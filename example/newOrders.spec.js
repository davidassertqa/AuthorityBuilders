/// <reference types="Cypress"/>


describe('New orders count', function () {

    var total = 0
    // var id675 = 0
    // var id661 = 0
    // var id650 = 0
    // var id638 = 0
    // var id594 = 0

    it("get id677 value", function() {

        cy.visit(Cypress.env("stagingAdmin"))
        cy.get('#email').type('david@assertqa.com')
        cy.wait(1000)
        cy.get('#password').type('Dreamteam2020_')
        cy.get('#loginBtn').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.wait(3000)
        cy.get('.text-info').click({force:true})
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(1) > :nth-child(3) > .tracking-link').invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
            cy.log(myLink)
        })
        cy.get('#on_board_datatables > tbody > tr:nth-child(1) > td:nth-child(14) > a').invoke('attr', 'href').then(newLink => {
            cy.visit(newLink);
            
        })

        cy.get('#select_inventory_datatables_length > label > .form-control').select('1000',{force:true})
     
        cy.get('#select_inventory_datatables_wrapper > :nth-child(2) > .col-sm-12').find('.sorting_1')
        .then(sorting => {
          const sortingCount = Cypress.$(sorting).length;
          expect(sorting).to.have.length(sortingCount);
          total = total + sortingCount
          
        }).then(function () {
            cy.log(total)
        })

    // })
    // it("get id675 value", function() {

        cy.visit(Cypress.env("stagingAdmin"))
        // cy.get('#email').type('david@assertqa.com')
        // cy.get('#password').type('Dreamteam2020_')
        // cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.wait(3000)
        cy.get('.text-info').click({force:true})
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(1) > :nth-child(3) > .tracking-link').invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
            cy.log(myLink)
        })
        cy.get('#on_board_datatables > tbody > tr:nth-child(2) > td:nth-child(14) > a').invoke('attr', 'href').then(newLink => {
            cy.visit(newLink);
            
        })

        cy.get('#select_inventory_datatables_length > label > .form-control').select('1000',{force:true})
       
       
        cy.get('#select_inventory_datatables_wrapper > :nth-child(2) > .col-sm-12').find('.sorting_1')
        .then(sorting => {
          const sortingCount = Cypress.$(sorting).length;
          expect(sorting).to.have.length(sortingCount);
          total = total + sortingCount
          
        }).then(function () {
            cy.log(total)
        })

    // })
    // it("get id661 value", function() {

        cy.visit(Cypress.env("stagingAdmin"))
        // cy.get('#email').type('david@assertqa.com')
        // cy.get('#password').type('Dreamteam2020_')
        // cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.wait(3000)
        cy.get('.text-info').click({force:true})
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(1) > :nth-child(3) > .tracking-link').invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
            cy.log(myLink)
        })
        cy.get('#on_board_datatables > tbody > tr:nth-child(3) > td:nth-child(14) > a').invoke('attr', 'href').then(newLink => {
            cy.visit(newLink);
            
        })

        cy.get('#select_inventory_datatables_length > label > .form-control').select('1000',{force:true})
       
       
        cy.get('#select_inventory_datatables_wrapper > :nth-child(2) > .col-sm-12').find('.sorting_1')
        .then(sorting => {
          const sortingCount = Cypress.$(sorting).length;
          expect(sorting).to.have.length(sortingCount);
          total = total + sortingCount
          
        }).then(function () {
            cy.log(total)
        })

    // })
    // it("get id650 value", function() {

        cy.visit(Cypress.env("stagingAdmin"))
        // cy.get('#email').type('david@assertqa.com')
        // cy.get('#password').type('Dreamteam2020_')
        // cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.wait(3000)
        cy.get('.text-info').click({force:true})
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(1) > :nth-child(3) > .tracking-link').invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
            cy.log(myLink)
        })
        cy.get('#on_board_datatables > tbody > tr:nth-child(4) > td:nth-child(14) > a').invoke('attr', 'href').then(newLink => {
            cy.visit(newLink);
            
        })

        cy.get('#select_inventory_datatables_length > label > .form-control').select('1000',{force:true})
       
       
        cy.get('#select_inventory_datatables_wrapper > :nth-child(2) > .col-sm-12').find('.sorting_1')
        .then(sorting => {
          const sortingCount = Cypress.$(sorting).length;
          expect(sorting).to.have.length(sortingCount);
          total = total + sortingCount
          
        }).then(function () {
            cy.log(total)
        })

    // })
    // it("get id638 value", function() {

        cy.visit(Cypress.env("stagingAdmin"))
        // cy.get('#email').type('david@assertqa.com')
        // cy.get('#password').type('Dreamteam2020_')
        // cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.wait(3000)
        cy.get('.text-info').click({force:true})
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(1) > :nth-child(3) > .tracking-link').invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
            cy.log(myLink)
        })
        cy.get('#on_board_datatables > tbody > tr:nth-child(5) > td:nth-child(14) > a').invoke('attr', 'href').then(newLink => {
            cy.visit(newLink);
            
        })

        cy.get('#select_inventory_datatables_length > label > .form-control').select('1000',{force:true})
       
       
        cy.get('#select_inventory_datatables_wrapper > :nth-child(2) > .col-sm-12').find('.sorting_1')
        .then(sorting => {
          const sortingCount = Cypress.$(sorting).length;
          expect(sorting).to.have.length(sortingCount);
          total = total + sortingCount
          
        }).then(function () {
            cy.log(total)
        })

    // })
    // it("get id694 value", function() {

        cy.visit(Cypress.env("stagingAdmin"))
        // cy.get('#email').type('david@assertqa.com')
        // cy.get('#password').type('Dreamteam2020_')
        // cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.wait(3000)
        cy.get('.text-info').click({force:true})
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(1) > :nth-child(3) > .tracking-link').invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
            cy.log(myLink)
        })
        cy.get('#on_board_datatables > tbody > tr:nth-child(6) > td:nth-child(14) > a').invoke('attr', 'href').then(newLink => {
            cy.visit(newLink);
            
        })

        cy.get('#select_inventory_datatables_length > label > .form-control').select('1000',{force:true})
       
       
        cy.get('#select_inventory_datatables_wrapper > :nth-child(2) > .col-sm-12').find('.sorting_1')
        .then(sorting => {
          const sortingCount = Cypress.$(sorting).length;
          expect(sorting).to.have.length(sortingCount);
          total = total + sortingCount
          
        }).then(function () {
            cy.log(total)
        })

        cy.visit(Cypress.env("stagingAdmin"))
        // cy.get('#email').type('david@assertqa.com')
        // cy.get('#password').type('Dreamteam2020_')
        // cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.wait(3000)
        cy.get('.text-info').click({force:true})
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(1) > :nth-child(3) > .tracking-link').invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
            cy.log(myLink)
        })
        cy.get('#on_board_datatables > tbody > tr:nth-child(7) > td:nth-child(14) > a').invoke('attr', 'href').then(newLink => {
            cy.visit(newLink);
            
        })

        cy.get('#select_inventory_datatables_length > label > .form-control').select('1000',{force:true})
       
       
        cy.get('#select_inventory_datatables_wrapper > :nth-child(2) > .col-sm-12').find('.sorting_1')
        .then(sorting => {
          const sortingCount = Cypress.$(sorting).length;
          expect(sorting).to.have.length(sortingCount);
          total = total + sortingCount
          
        }).then(function () {
            cy.log(total)
        })
        cy.visit(Cypress.env("stagingAdmin"))
        // cy.get('#email').type('david@assertqa.com')
        // cy.get('#password').type('Dreamteam2020_')
        // cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.wait(3000)
        cy.get('.text-info').click({force:true})
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(1) > :nth-child(3) > .tracking-link').invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
            cy.log(myLink)
        })
        cy.get('#on_board_datatables > tbody > tr:nth-child(8) > td:nth-child(14) > a').invoke('attr', 'href').then(newLink => {
            cy.visit(newLink);
            
        })

        cy.get('#select_inventory_datatables_length > label > .form-control').select('1000',{force:true})
       
       
        cy.get('#select_inventory_datatables_wrapper > :nth-child(2) > .col-sm-12').find('.sorting_1')
        .then(sorting => {
          const sortingCount = Cypress.$(sorting).length;
          expect(sorting).to.have.length(sortingCount);
          total = total + sortingCount
          
        }).then(function () {
            cy.log(total)
        })
        cy.visit(Cypress.env("stagingAdmin"))
        // cy.get('#email').type('david@assertqa.com')
        // cy.get('#password').type('Dreamteam2020_')
        // cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.wait(3000)
        cy.get('.text-info').click({force:true})
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
        })
        cy.get(':nth-child(1) > :nth-child(3) > .tracking-link').invoke('attr', 'href').then(myLink => {
            cy.visit(myLink);
            cy.log(myLink)
        })
        cy.get('#on_board_datatables > tbody > tr:nth-child(9) > td:nth-child(14) > a').invoke('attr', 'href').then(newLink => {
            cy.visit(newLink);
            
        })

        cy.get('#select_inventory_datatables_length > label > .form-control').select('1000',{force:true})
       
       
        cy.get('#select_inventory_datatables_wrapper > :nth-child(2) > .col-sm-12').find('.sorting_1')
        .then(sorting => {
          const sortingCount = Cypress.$(sorting).length;
          expect(sorting).to.have.length(sortingCount);
          total = total + sortingCount
          
        }).then(function () {
            cy.log(total)
        })

    })
    it("New orders count equel to count of new orders", function() {
       
        cy.visit(Cypress.env("stagingAdmin"))
        // cy.get('#email').type('david@assertqa.com')
        // cy.get('#password').type('Dreamteam2020_')
        // cy.get('#loginBtn').click()
        cy.get(':nth-child(1) > [data-toggle="collapse"] > p').click()
        cy.get('#admin_dashboard > .nav > :nth-child(1) > a > p').click()
        cy.wait(3000)
        cy.get('.text-info').click({force:true})
        
        //var total = id677 + id675 + id661 + id650 + id638 + id594

        cy.log(total)
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
            expect(total).to.equal(newOrderCount)
        })

    })
    it("New orders table count good", function() {
       
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
        cy.wait(3000)
        cy.get('.text-info').click({force:true})


      
        cy.get('tbody > :nth-child(1) > :nth-child(4)').each(($el, index, $list) => {

             const amount = $el.text()
              col1 = Number(col1) + Number(amount)

            }).then(function () {
                 cy.log(col1)
            })
            
        cy.get('tbody > :nth-child(1) > :nth-child(5)').each(($el, index, $list) => {

            const amount = $el.text()
             col2 = Number(col2) + Number(amount)
    
        }).then(function () {
            cy.log(col2)
        })

        cy.get('tbody > :nth-child(1) > :nth-child(6').each(($el, index, $list) => {

            const amount = $el.text()
            col3 = Number(col3) + Number(amount)
    
        }).then(function () {
            cy.log(col3)
        })
        cy.get('tbody > :nth-child(1) > :nth-child(7)').each(($el, index, $list) => {

            const amount = $el.text()
            col4 = Number(col4) + Number(amount)
    
        }).then(function () {
            cy.log(col4)
        })

        cy.get('tbody > :nth-child(1) > :nth-child(8)').each(($el, index, $list) => {

            const amount = $el.text()
            col5 = Number(col5) + Number(amount)
    
        }).then(function () {
            cy.log(col5)
        })
        cy.get('tbody > :nth-child(1) > :nth-child(9)').each(($el, index, $list) => {

            const amount = $el.text()
            col6 = Number(col6) + Number(amount)
    
        }).then(function () {
            cy.log(col6)
        })
        
        cy.get('tbody > :nth-child(1) > :nth-child(3)').then(function (element) {
            var newOrderCount = Number(element.text())
            cy.log(newOrderCount)
            var total = col1 + col2 + col3 + col4 +col5 + col6 
            expect(total).to.equal(newOrderCount)
        })

    })

})