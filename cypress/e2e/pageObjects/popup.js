class pop_page{
    create_popup="//button[normalize-space()='Create Popup']"
    name_popup="#name"
    file_upload="label.flex.items-center.gap-3[for='assets']"
    submit_pop="button[type='submit']"
    // download='button[data-slot="button"][aria-invalid="false"]'
    // down_file="div.flex.items-center.gap-2 > button"
    download="tbody tr:nth-child(1)"
    move_button='div.flex.items-center.gap-1 > button[data-slot="button"]'
    three_dot="#reka-dropdown-menu-trigger-v-102"
    edit_xpath="//div[@role='menuitem'][normalize-space()='Edit']"
    update_xpath="//button[normalize-space()='Update']"
    delete_xpath="//div[@role='menuitem'][normalize-space()='Delete']"

}
export default new pop_page()