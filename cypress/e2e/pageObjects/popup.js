class pop_page{
    create_popup="//button[normalize-space()='Create Popup']"
    name_popup="#name"
    file_upload="label.flex.items-center.gap-3[for='assets']"
    submit_pop="button[type='submit']"
    // download='button[data-slot="button"][aria-invalid="false"]'
    // down_file="div.flex.items-center.gap-2 > button"
    download="td:nth-child(7) button.rounded-md.text-sm.font-medium"
    move_button='div.flex.items-center.gap-1 > button[data-slot="button"]'
    three_dot='button[data-slot="dropdown-menu-trigger"][aria-haspopup="menu"][data-state="closed"]'
    edit_xpath="//div[@role='menuitem'][normalize-space()='Edit']"
    update_xpath="//button[normalize-space()='Update']"
    delete_xpath="//div[@role='menuitem'][normalize-space()='Delete']"
    year_xpath="//button[normalize-space()='Create Year']"
    name_xpath="//input[@id='year-name']"
    start_date_xpath="//input[@id='year-start-date-ad']"
    end_date_xpath="//input[@id='year-end-date-ad']"
    save="button[type='submit']"
    create_xpath="//button[normalize-space()='Create Sector']"
    sector_name="#sector-name"
    sector_submit="button[type='submit']"

}
export default new pop_page()