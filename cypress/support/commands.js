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
// Cypress.Commands.add('create inst',(description,institution_type_id,name,state_id,state_status,distrcit_id,district_status,city_ids,status,year_id,token)=>{
//     cy.request({
//         method:'GET',
//         url:'https://stcchildbudget.infodev.com.np/public-api/api/v1/public/locations/districts',
//         headers:{
//             'Authorization': `Bearer ${token}`, 
//             'Accept': 'application/json'
//         },
//     }).then((response)=>{
//         const districtname=response.body.data(item =>dataitem==Cypress.env('districtName'))
//         if(!district){
//             throw new error('this is not a district name')
//         }
//         cy.log('district id',districtname.id)
//         const districtID=districtname.id

//     })
    
//     cy.request({
//         method:'POST',
//         url:"https://stcchildbudget.infodev.com.np/public-api/api/v1/institutions",
//         body:{
//             description:description,
//             institution_type_id:institution_type_id,
//             name:name,
//             region:{
//                 state_id:state_id,
//                 state_status:state_status,
//                 distrcit_id:district_id,
//                 district_status:district_status,
//                 city_ids:city_ids
//             },
//             status:status,
//             year_id:year_id

//         },
//         headers:{
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`, 
//             'Accept': 'application/json'
//         },

//     })
// })

