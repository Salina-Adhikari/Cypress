describe('Orange hrm test',function(){
    it('test1',function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title('eq','OrangeHRM')
    
    })
})