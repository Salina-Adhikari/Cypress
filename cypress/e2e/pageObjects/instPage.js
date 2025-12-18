class instPage{
    institution_man_xpath="//span[normalize-space()='Institution Management']"
    institution_types='a[href="/institution-management/types"]'
    institution_types_3dot='button[data-slot="dropdown-menu-trigger"]'
    dot_activate_xpath="//div[@role='menuitem'][normalize-space()='Activate']"
    dot_deactivate_xpath="//div[@role='menuitem'][normalize-space()='Deactivate']"
    institutions='a[href="/institution-management/institutions"]'
    create_institution_xpath="//button[normalize-space()='Create Institution']"
    name_field_xpath="//input[@id='name']"
    description_filed_xpath="//textarea[@id='description']"
    institution_dropdown="#institution_type_id"
    state_dropdown="#state"
    status_dropdown="#status"
    district_dropdown="#district"
    city_dropdown='button[data-slot="popover-trigger"]'
    city_option=".group[data-v-151e3ada]"
    add_region_xpath="//button[normalize-space()='Add Region Group']"
    enable_all_xpath="//button[normalize-space()='Enable All']"
    disable_all_xpath="//button[normalize-space()='Disable All']"
    submit_form="button[type='submit'] span"
    three_dot='button[data-slot="dropdown-menu-trigger"]'
    dot_edit_xpath="//div[@role='menuitem'][normalize-space()='Edit']"
    dot_activate_xpath="//div[@role='menuitem'][normalize-space()='Activate']"
    dot_deactivate_xpath="//div[@role='menuitem'][normalize-space()='Deactivate']"
    dot_delete_xpath="//div[@role='menuitem'][normalize-space()='Delete']"
    dot_confirm_xpath="//button[normalize-space()='Confirm']"
    confirm_delete_xpath="//button[normalize-space()='Delete']"
    edit_inst='#name'
    edit_update="button[type='submit'] span"
    move_button_xpath="//body/div[@id='app']/div[1]"
    assign_inst ='button[data-slot="tooltip-trigger"]'
    assign_confirm_xpath="//button[normalize-space()='Confirm']"
    add_dropdown ='button[data-slot="select-trigger"]'
    add_xpath="//button[normalize-space()='Add']"
    status="button[value='on']"
    save_xpath="//button[normalize-space()='Save']"
    // Investment
    invest_create="//button[normalize-space()='Create Investement']"
    search_inst="input[placeholder='Search institutions (e.g, University, Bank)...']"
    select_inst="div[aria-label='Select RYC']"
    select_province="div[aria-label='Select Madhesh Pradesh (Province No. 2)']"
    select_district="div[aria-label='Select Mahottari']"
    select_muni="div[aria-label='Select Jaleshwor Municipality']"
    click_cont="button[aria-label='Continue to enter details']"
    sector_dropdown="button[aria-label='Select sector']"
    budget_title="textarea[placeholder='e.g., School Renovation 2025']"
    policy_dropdown="button[aria-label='Select policy type']"
    // policies_dropdown='button[aria-haspopup="dialog"][aria-expanded="true"][data-state="open"]'
    dropdown_tags='button[role="combobox"][aria-expanded="true"]'
    policies_value='button[role="checkbox"][data-state="unchecked"]' 
    tags_dropdown_value='button[role="checkbox"][data-state="unchecked"]' 
    int_budget='input[placeholder="e.g., 5000.00"][aria-describedby="approximation-amount-description"]'
    state_rest_fund="input[placeholder='e.g., 1000.00']"
    state_unres_fund="input[placeholder='e.g., 2000.00']"
    state_add_fund="input[placeholder='e.g., 1500.00']"
    state_spec_fund="input[placeholder='e.g., 2500.00']"
    fed_rest_fund="input[placeholder='e.g., 3000.00']"
    fed_unres_fund="input[placeholder='e.g., 4000.00']"
    fed_add_fund="input[placeholder='e.g., 3500.00']"
    fed_spec_fund="input[placeholder='e.g., 4500.00']"
    annual_budget="input[placeholder='e.g., 20000.00']"
    annual_expen="input[placeholder='e.g., 15000.00']"
    status="button[aria-label='Select status']"
    save_budget="button[aria-label='Save budget']"
    
   

}

export default new instPage();