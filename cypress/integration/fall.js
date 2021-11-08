describe('Birthday menu', function (){
    it('Validate all the menu option exist', function(){
        cy.visit('https://ftd.com/?forcesplit=merx');
        cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
        cy.get('#mobile-navigation-container-inner').should('be.visible')
        cy.get('#mobile-navigation-container-inner').contains('Thanksgiving')
        cy.get('#mobile-navigation-container-inner').contains('Birthday')
        cy.get('#mobile-navigation-container-inner').contains('Sympathy')
        cy.get('#mobile-navigation-container-inner').contains('All Occasions')
        cy.get('#mobile-navigation-container-inner').contains('Flowers')
        cy.get('#mobile-navigation-container-inner').contains('Plants')
        cy.get('#mobile-navigation-container-inner').contains('Gifts')
        cy.get('#mobile-navigation-container-inner').contains('Gifts')
        cy.get('#mobile-navigation-container-inner').contains('Help')
    
    });

     it('Validate that Fall Flowers does not 404 page' , function(){
       cy.get('#mobile-navigation-container-inner').contains('Fall').click()
       cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
       cy.get('.side-panel_content__-yKmm').contains('FALL FLOWERS').click()
       cy.url().should('include', '/occasion/fall/flowers?')
       cy.get('.col-md-12 > .cms-component > .container').contains('Fall Flower & Gifts')
    });

    it('Validate that Fall Roses does not 404 page' , function(){
        cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
        cy.get('#mobile-navigation-container-inner').contains('Fall').click()
        cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
        cy.get('.side-panel_content__-yKmm').contains('Fall Roses').click()
        cy.url().should('include', '/occasion/fall/roses?')
        cy.get('.col-md-12 > .cms-component > .container').contains('Fall Roses')
     });

     it('Validate that Orange Roses does not 404 page' , function(){
        cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
        cy.get('#mobile-navigation-container-inner').contains('Fall').click()
        cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
        cy.get('.side-panel_content__-yKmm').contains('Orange Roses').click()
        cy.url().should('include', '/flowers/roses/orange?')
        cy.get('.col-md-12 > .cms-component > .container').contains('Orange Roses')
     });

     it('Validate that Sunflowers does not 404 page' , function(){
        cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
        cy.get('#mobile-navigation-container-inner').contains('Fall').click()
        cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
        cy.get('.side-panel_content__-yKmm').contains('Sunflowers').click()
        cy.url().should('include', '/flowers/sunflowers?')
        cy.get('.col-md-12 > .cms-component > .container').contains('Sunflower Delivery')
     });

     it('Validate that Carnations does not 404 page' , function(){
        cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
        cy.get('#mobile-navigation-container-inner').contains('Fall').click()
        cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
        cy.get('.side-panel_content__-yKmm').contains('Carnations').click()
        cy.url().should('include', '/flowers/carnations?')
        cy.get('.col-md-12 > .cms-component > .container').contains('Carnation Flowers & Bouquets')
     });

     it('Validate that Mums does not 404 page' , function(){
        cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
        cy.get('#mobile-navigation-container-inner').contains('Fall').click()
        cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
        cy.get('.side-panel_content__-yKmm').contains('Mums').click()
        cy.url().should('include', '/plants/mums?')
        cy.get('.col-md-12 > .cms-component > .container').contains('Chrysanthemums')
     });

     it('Validate that Fall Same Day Delivery does not 404 page' , function(){
        cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
        cy.get('#mobile-navigation-container-inner').contains('Fall').click()
        cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
        cy.get('.side-panel_content__-yKmm').contains('Fall Same Day Delivery').click()
        cy.url().should('include', '/occasion/fall/same-day-delivery?')
        cy.get('.col-md-12 > .cms-component > .container').contains('Same Day Fall Delivery')
     });

     
     it('Validate that Fall Gifts does not 404 page' , function(){
        cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
        cy.get('#mobile-navigation-container-inner').contains('Fall').click()
        cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
        cy.get('.side-panel_content__-yKmm').contains('Fall Gifts').click()
        cy.url().should('include', '/occasion/fall/gourmet-and-gifts?')
        cy.get('.col-md-12 > .cms-component > .container').contains('Fall Gifts & Fall Gift Baskets')
     });

     it('Validate that Diwali not 404 page' , function(){
        cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
        cy.get('#mobile-navigation-container-inner').contains('Fall').click()
        cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
        cy.get('.side-panel_content__-yKmm').contains("Diwali").click()
        cy.url().should('include', 'occasion/diwali?')
        cy.get('.col-md-12 > .cms-component > .container').contains("Diwali Flowers")
     });
     it('Validate that Halloween not 404 page' , function(){
      cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
      cy.get('#mobile-navigation-container-inner').contains('Fall').click()
      cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
      cy.get('.side-panel_content__-yKmm').contains("Halloween").click()
      cy.url().should('include', 'occasion/halloween?')
      cy.get('.col-md-12 > .cms-component > .container').contains("Halloween Gifts, Flowers, & Plants")
   });
   it('Validate that Singles Day not 404 page' , function(){
      cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
      cy.get('#mobile-navigation-container-inner').contains('Fall').click()
      cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
      cy.get('.side-panel_content__-yKmm').contains("Singles Day").click()
      cy.url().should('include', 'occasion/singles-day?')
      cy.get('.col-md-12 > .cms-component > .container').contains("Singles' Day Gifts & Flowers Sale")
   });
   it('Validate that Thanksgiving Collection not 404 page' , function(){
      cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
      cy.get('#mobile-navigation-container-inner').contains('Fall').click()
      cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
      cy.get('.side-panel_content__-yKmm').contains("THANKSGIVING BEST SELLERS").click()
      cy.url().should('include', 'occasion/thanksgiving?')
      cy.get('.banner').contains("THANKSGIVING FLOWERS")
   });
   it('Validate that Veterans Day Collection not 404 page' , function(){
      cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
      cy.get('#mobile-navigation-container-inner').contains('Fall').click()
      cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
      cy.get('.side-panel_content__-yKmm').contains("Veteran's Day").click()
      cy.url().should('include', 'occasion/veterans-day-flowers?')
      cy.get('.col-md-12 > .cms-component > .container').contains("Veterans Day Flowers & Gifts")
   });
   it('Validate that View Fall Collection Collection not 404 page' , function(){
      cy.get('.hamburger_hamburger__27gQ0 > svg').should('be.visible').click()
      cy.get('#mobile-navigation-container-inner').contains('Fall').click()
      cy.get('#navigation-menu-Fall-wrapper > .side-panel_content__-yKmm').should('be.visible')
      cy.get('.side-panel_content__-yKmm').contains("View Fall Collection").click()
      cy.url().should('include', 'occasion/fall?')
      cy.get('[data-section-id="404Ibv16ofF5s00F4Bww5U"] > .container > .row > .col > .mt-0').contains("Fall Flowers and Gifts")
   });
     
})