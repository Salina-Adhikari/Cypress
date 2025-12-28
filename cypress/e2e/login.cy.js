import stc from "./pageObjects/stcPage.js"
import stra from "./pageObjects/strategy.js"
import inst from "./pageObjects/instPage.js"
import pop from "./pageObjects/popup.js"
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
    // cy.createuser(randomName,admin_email,Cypress.env("admininfo").password,Cypress.env("admininfo").password,'inactive','Not_verified')
    // cy.visit('/admin/users')
    // cy.wait(2000)
    // cy.get(stc.hamburger_icon,{timeout:10000}).should('be.visible').click()
    // cy.xpath(stc.admin_option_xpath,{timeout:1000}).should('be.visible').click()
    // cy.xpath(stc.admin_user_roles_xpath).click()
    // cy.get('body').type('{esc}')
    // cy.get('@userid').then((userid)=>{
    //     cy.get('@token').then((token)=>{
    //         cy.assignrole(Cypress.env('roles'),userid,Cypress.env('year_id'),token)

    //     })
        
    // })
    // cy.visit('/admin/permissions')
    // cy.get(stc.hamburger_icon,{timeout:10000}).should('be.visible').click()
    // cy.xpath(stc.admin_option_xpath,{timeout:1000}).should('be.visible').click()
    // cy.get(stc.create_role).should ('be.visible').click()
    // cy.get('body').type('{esc}')
    // cy.xpath(stc.button_create_role_xpath).should('be.visible').click()
    // cy.get(stc.create_role_input).clear().type(randomName)
    // cy.get(stc.create_role_create).click()
    // // cy.get(stc.create_role_cancel).click()
    // cy.wait(2000)
    // cy.get(stc.hamburger_icon,{timeout:10000}).scrollIntoView().should('be.visible').click()
    // cy.xpath(inst.institution_man_xpath).click()
    // cy.contains('Institution Types').click()
    // cy.get('body').type('{esc}')
    // cy.contains('tr',Cypress.env('institutionName')).within(()=>{
    //     cy.get(inst.institution_types_3dot).click()
    //     cy.xpath(inst.dot_activate_xpath).click()

    // })
    // cy.visit('/institution-management/institutions')
    // cy.xpath(inst.create_institution_xpath).click()
    // cy.xpath(inst.name_field_xpath).type(Cypress.env("Create_inst").name)
    // cy.xpath(inst.description_filed_xpath).type(Cypress.env("Create_inst").description)
    // cy.get(inst.institution_dropdown).click()
    // cy.contains('[role="option"]', 'Federal').click()
    // cy.get(inst.state_dropdown).click()
    // cy.contains('[role="option"]', 'Madhesh Pradesh (Province No. 2)').click()
    // cy.get(inst.status_dropdown).click()
    // cy.contains('[role="option"]','Active').click()
    // cy.get(inst.district_dropdown).click()
    // cy.contains('[role="option"]','Mahottari').click()
    // cy.get(inst.city_dropdown).click()
    // cy.get(inst.city_option).eq(3).click()
    // cy.get(inst.city_dropdown).click()
    // cy.xpath(inst.add_region_xpath).click()
    // cy.xpath(inst.enable_all_xpath).click()
    // cy.get(inst.submit_form).click()
// cy.contains('tr',Cypress.env('inst_created')).within(()=>{
//     cy.get(inst.three_dot).click()
//     cy.wait(1000)
//     cy.xpath(inst.dot_delete_xpath).click()
//     cy.xpath(inst.dot_confirm_xpath).click()
//     cy.xpath(inst.confirm_delete_xpath).click()//To deactive the institution
// })

// cy.contains('tr',Cypress.env('inst_created')).within(()=>{
//         cy.get(inst.three_dot).click()
//         cy.xpath(inst.dot_edit_xpath).click()

//     })

// cy.wait(1000)
// cy.get(inst.edit_inst).clear().type('Helen')
// cy.get(inst.edit_update).click()//this is for the edit of the form

//Institution Users
//    cy.visit("https://stcchildbudget.infodev.com.np/institution-management/institution-users")
// cy.contains('tr',Cypress.env('user_assign')).within(()=>{
//     cy.get(inst.assign_inst).click()
//     cy.xpath(inst.assign_confirm_xpath).click()
// })


    // function findAndAssign(){
    //     cy.get('tr').then(($tr)=>{
    //         const textToFind=Cypress.env('user_assign')
    //         const $row_finder=$tr.filter(`:contains("${textToFind}")`)
    //         if ($row_finder.length>0){
    //             cy.log('Row finder is ',$row_finder)
    //             cy.wrap($row_finder).within(()=>{
    //                 cy.get(inst.assign_inst).click()
                    
                    

    //             })
    //             cy.xpath(inst.assign_confirm_xpath).click()
                
    //         }
    //         else{
    //             cy.xpath(inst.move_button_xpath).click()
    //             cy.wait(1000)
    //             findAndAssign()
    //         }
    //     })
    //  }
    // findAndAssign()


    // cy.contains('button', 'Select an institution...').click()

    // cy.contains('[role="option"]','Create').click()
    // cy.xpath(inst.add_xpath).click()
    // cy.xpath(inst.save_xpath).click()
    // cy.wait(1000)
// Create Investment
    // cy.visit("https://stcchildbudget.infodev.com.np/investments")
    // cy.wait(1000)
    // cy.xpath(inst.invest_create).click()
    // cy.get(inst.search_inst).click().type(Cypress.env('search_inst'))
    // cy.get(inst.select_inst).click({force:true})
    // cy.get(inst.select_province).click()
    // cy.get(inst.select_district).click()
    // cy.get(inst.select_muni).click()
    // cy.get(inst.click_cont).click()
    // cy.get(inst.sector_dropdown).click()
    // cy.contains('[role="option"]','Development').click()
    // cy.get(inst.budget_title).click().type(Cypress.env("Create_budget").title)
    // cy.get(inst.policy_dropdown).click()
    // cy.contains('[role="option"]','Child Policy').click()
    // // cy.get(inst.policies_dropdown).click()
    // cy.contains('Select one or more policies').parent().click()
    // cy.wait(1000)
    // cy.get(inst.policies_value).eq(0).click({force: true})
    // cy.contains('Select one or more policies').parent().click()
    // cy.contains('Select tags').parent().click()
    // cy.get(inst.tags_dropdown_value).first().click({force:true})
    // cy.wait(1000)
    // cy.get(inst.dropdown_tags).click({force:true})
    // cy.wait(1000)
    // // cy.contains("Enter the total number of children impacted, if applicable.").click({force:true}).clear().type(Cypress.env("Create_budget").child_imp)
    // cy.get(inst.int_budget).click().clear().type(10000000)
    // cy.get(inst.state_rest_fund).click().type(577878)
    // cy.get(inst.state_unres_fund).click().type(0)
    // cy.get(inst.state_add_fund).click().type(0)
    // cy.get(inst.state_spec_fund).click().type(0)
    // cy.get(inst.fed_rest_fund).click().type(67890)
    // cy.get(inst.fed_add_fund).click().type(45679)
    // cy.get(inst.fed_spec_fund).click().type(9078)
    // cy.get(inst.annual_budget).click().type(3000000)
    // cy.get(inst.annual_expen).click().type(34000)
    // cy.get(inst.status).click()
    // cy.contains('[role="option"]',"Active").click()
    // cy.get(inst.save_budget).click()
    // cy.wait(1000)
    // cy.visit("https://stcchildbudget.infodev.com.np/strategy/activities")
    // cy.xpath(stra.create_act_xpath).click()
    // cy.get(stra.name).click().type(Cypress.env("Create_act").name)
    // cy.get(stra.imple).click().type(Cypress.env("Create_act").impl)
    // cy.get(stra.dura).click().type(Cypress.env("Create_act").duration)
    // cy.get(stra.achive).click().type(Cypress.env("Create_act").achivement)
    // cy.get(stra.status).click()
    // cy.contains('[role="option"]',"Inactive").click()
    // cy.get(stra.submit).click()
    // cy.visit("https://stcchildbudget.infodev.com.np/strategy/policies")
    // cy.xpath(stra.policy_xpath).click()
    // cy.get(stra.policy_name).click().type(Cypress.env("Create_policy").name)
    // cy.get(stra.policy_point).click().type(Cypress.env("Create_policy").point)
    // cy.get(stra.policy_save).click()
    
    cy.visit("https://stcchildbudget.infodev.com.np/popups")
    cy.xpath(pop.create_popup).click()
    cy.wait(1000)
    cy.get(pop.name_popup).click().type(Cypress.env('pop_name'))
    cy.get(pop.file_upload).scrollIntoView().click().selectFile('cypress/fixtures/test.pdf',{force:true})
    cy.get(pop.submit_pop).should('be.visible').click({force: true}).then(() => {
        cy.wait(2000) 
})
    cy.wait(5000)
    // function findAnddown(){
    //     cy.get('tr',{timeout:1000}).then(($tr)=>{
    //         const textToFind=Cypress.env('pop_name')
    //         const $row_finder=$tr.filter(`:contains("${textToFind}")`)
    //         if ($row_finder.length>0){
    //             cy.log('Row finder is ',$row_finder)
    //             cy.wrap($row_finder).within(()=>{
    //                    cy.get(pop.three_dot).click()
    // //                 cy.get(pop.download).click()
                    
                    

    //             })
                
    //         }
    //         else{
    //             cy.xpath(pop.move_button).click()
    //             cy.wait(1000)
    //             findAnddown()
    //         }
    //     })
    //  }
    // findAnddown()
    
    // cy.xpath(pop.edit_xpath).click()
    // cy.get(pop.name_popup).click().clear().type("Sunnny")
    // cy.xpath(pop.update_xpath).click()
//     cy.xpath(pop.delete_xpath).click()
    //    cy.wait(2000)

//Creating setup Secotrs
   cy.visit("https://stcchildbudget.infodev.com.np/setup/sectors")
   cy.xpath(pop.create_xpath).click()
   cy.xpath(pop.sector_submit).click()

       
})
})












    



















    


    
      
    


    

    
   



