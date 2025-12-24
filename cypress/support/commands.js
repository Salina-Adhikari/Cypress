// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />
import inst from '../e2e/pageObjects/instPage.js'
import 'cypress-xpath';
Cypress.Commands.add('createuser',(name,email,password,password_confirmation,status,verified_status) =>{
    
    cy.request({
        method:'POST',
        url:"https://stcchildbudget.infodev.com.np/public-api/api/register",
        body:{
            name:name,
            email:email,
            password:password,
            password_confirmation:password_confirmation,
            status:status,
            verified_status:verified_status

        },
        headers:{
            'Content-Type':'application/json'
        }
    }).then((response) =>{
        
        expect(response.body.data.user).to.have.property('id')
        const id=response.body.data.user.id
        cy.wrap(id).as('userid')
        
        
    
    })
})
Cypress.Commands.add('assignrole',(roles,user_id,year_id,token) =>{
    cy.request({
        method:'POST',
        url:'https://stcchildbudget.infodev.com.np/public-api/api/v1/user-roles/assign',
        body:{
            roles:roles,
            user_id:user_id,
            year_id:year_id

        },
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
            'Accept': 'application/json'
        },
        failOnStatusCode: false



    }).then((response) =>{
        expect(response.status).to.be.oneOf([200,201])
        expect(response.body.data).to.have.property('roles')
        cy.log('HEADERS: ' + JSON.stringify(response.headers))
        cy.log('BODY: ' + (typeof response.body === 'object' ? JSON.stringify(response.body) : response.body))
    })

})
Cypress.Commands.add('popup',(token)=>{
    cy.fixture('test.pdf','binary').then((file)=>{
        const formData=new FormData()
        formData.append('name','henry')
        formData.append('order',0)
        formData.append('status','inactive')
        formData.append('assets',
            Cypress.Blob.binaryStringToBlob(file),'test.pdf'
        )
        cy.request({
            method:'POST',
            url:"https://stcchildbudget.infodev.com.np/public-api/api/v1/popups",
            body:formData,
             headers: {
                'Authorization': `Bearer ${token}`
    }

        }).then((response)=>{
            cy.log('Response:',response.body)
        })
        
    })
})


 









