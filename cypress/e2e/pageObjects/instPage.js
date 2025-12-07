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
    institution_xpath="//div[@role='listbox']//div[5]"

}

export default new instPage();