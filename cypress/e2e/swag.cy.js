describe('Login workflow',() =>{
    it ('positive ceredentials',() =>{
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("[type='submit']").click()
        cy.get(".product_label")
          .should("contain.text","Products")
    })
    it ('negative ceredentials',() =>{
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get("#user-name").type("standard_userr")
        cy.get("#password").type("secret_saucee")
        cy.get("[type='submit']").click()
        cy.get("h3[data-test='error']")
          .should("be.visible")
          .and("contain.text","Epic sadface: ")
          
    })
})