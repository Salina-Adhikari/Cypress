import stc from "./pageObjects/stcPage.js"
import inst from "./pageObjects/instPage.js"
require ('cypress-xpath')
import CryptoJS from 'crypto-js'
const SECRET_KEY = '' 
const admin_email = `${Cypress.env('email_prefix')}${Date.now()}@test.com`
const randomName = `user_${Math.random().toString(36).substring(2, 8)}`
Cypress.Commands.add('logininfo',(email,password) =>{
    cy.request({
        method:'POST',
        url:'/public-api/api/login',
        headers:{
            'content-type':'application/json',
        },
        body:{
            email:email,
            password:password
        },
    }).then((response) =>{
        expect(response.status).to.be.oneOf([200,201])
        cy.log('Response Body:', response.body)
        const body=response.body
        const data = response.body.data
        const user = data.user
        const token = data.token
        
        cy.log('Token:', token)
        cy.wrap(token).as('token')
        cy.log('API Response:', JSON.stringify(body))
        const setCookieHeader = response.headers['set-cookie']
        cy.log('Set-Cookie header:', JSON.stringify(setCookieHeader));

        if (setCookieHeader) {
            setCookieHeader.forEach(cookie => {
                if (cookie.includes('laravel_session')) {
                    const cookieValue = cookie.split(';')[0].split('=')[1]
                    cy.setCookie('laravel_session', cookieValue,{domain:'stcchildbudget.infodev.com.np'}) 
                    cy.log('Cookie Value:'+cookieValue) 
            
                } 
                else{
                    cy.log('NO cookie is set1')
                }
        
            })}  
        else{
            cy.log("No cookie is set2")
    }
        cy.visit('/dashboard',{
        // cy.url().should('include', '/dashboard')
        // cy.url().should('not.include', '/login')
            
             onBeforeLoad(win) {
                
                const encryptedToken = CryptoJS.AES.encrypt(token, SECRET_KEY).toString()
                const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(user), SECRET_KEY).toString()
                const encryptedPermissions = CryptoJS.AES.encrypt(JSON.stringify(user.permissions), SECRET_KEY).toString()
                const encryptedYearId = CryptoJS.AES.encrypt('1', SECRET_KEY).toString()
                
                win.localStorage.setItem('token', encryptedToken)
               
                win.localStorage.setItem('user', encryptedUser)
                win.localStorage.setItem('permissions', encryptedPermissions)
                win.localStorage.setItem('year_id', encryptedYearId)
            }
        
        })
    })
        

    })

describe('Login process',() =>{
  it("User Action for login",() =>{
    cy.viewport(412,914)
    cy.logininfo(Cypress.env("email"),(Cypress.env("password")))
    cy.wait(1000)
    cy.get(stc.hamburger_icon,{timeout:10000}).should('be.visible').click()
    cy.xpath(stc.admin_option_xpath,{timeout:1000}).should('be.visible').click()
    cy.get(stc.users_option).click()
    cy.get('body').type('{esc}')
    // UI Way
    // cy.contains('Create User').click()
    // cy.get(stc.create_user_name).type(randomName)
    // cy.get(stc.create_user_email).clear().type(admin_email)
    // cy.get(stc.create_user_passw).clear().type(Cypress.env("admininfo").password)
    // cy.get(stc.create_user_submit).click()
    // cy.get(stc.hamburger_icon,{timeout:30000}).should('be.visible').click()
    // cy.xpath(stc.admin_user_roles_xpath).click()
    // cy.get('body').type('{esc}')
    // API Way
    cy.createuser(randomName,admin_email,Cypress.env("admininfo").password,Cypress.env("admininfo").password,'inactive','Not_verified')
    cy.visit('/admin/users')
    cy.wait(2000)
    cy.get(stc.hamburger_icon,{timeout:10000}).should('be.visible').click()
    cy.xpath(stc.admin_option_xpath,{timeout:1000}).should('be.visible').click()
    cy.xpath(stc.admin_user_roles_xpath).click()
    cy.get('body').type('{esc}')
    cy.get('@userid').then((userid)=>{
        cy.get('@token').then((token)=>{
            cy.assignrole(Cypress.env('roles'),userid,Cypress.env('year_id'),token)

        })
        
    })
    cy.visit('/admin/permissions')
    cy.get(stc.hamburger_icon,{timeout:10000}).should('be.visible').click()
    cy.xpath(stc.admin_option_xpath,{timeout:1000}).should('be.visible').click()
    cy.get(stc.create_role).should ('be.visible').click()
    cy.get('body').type('{esc}')
    cy.xpath(stc.button_create_role_xpath).should('be.visible').click()
    cy.get(stc.create_role_input).clear().type(randomName)
    cy.get(stc.create_role_create).click()
    // cy.get(stc.create_role_cancel).click()
    cy.wait(2000)
    cy.get(stc.hamburger_icon,{timeout:10000}).scrollIntoView().should('be.visible').click()
    cy.xpath(inst.institution_man_xpath).click()
    cy.contains('Institution Types').click()
    cy.get('body').type('{esc}')
    cy.contains('tr',Cypress.env('institutionName')).within(()=>{
        cy.get(inst.institution_types_3dot).click()
        cy.xpath(inst.dot_activate_xpath).click()

    })
    cy.visit('/institution-management/institutions')
    cy.xpath(inst.create_institution_xpath).click()
    cy.xpath(inst.name_field_xpath).type(Cypress.env("Create_inst").name)
    cy.xpath(inst.description_filed_xpath).type(Cypress.env("Create_inst").description)
    cy.get(inst.institution_dropdown).click()
    cy.xpath(inst.institution_xpath).scrollIntoView().click()

    

    
   







    

    
    

    })
    
    


})