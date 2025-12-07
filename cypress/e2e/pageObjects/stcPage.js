class stcPage{

      email_login="input[placeholder='Email Address"
      password_login="input[placeholder='Password']"
      submit_login="button[type='submit']"
      hamburger_icon='button[data-slot="sidebar-trigger"]'
      admin_option_xpath="//span[normalize-space()='Admin']"
      users_option='a[href="/admin/users"][data-slot="sidebar-menu-button"]'
      create_user_name="#name"
      create_user_email="#email"
      create_user_passw="#password"
      create_user_submit="body > div:nth-child(5) > div:nth-child(3) > button:nth-child(2)"
      admin_user_roles_xpath="//span[normalize-space()='User Roles']"
      user_roles_assign='button[data-slot="tooltip-trigger"]'
      user_roles_assign_confirm_xpath="//button[normalize-space()='Confirm']"
      user_roles_assign_cancel_xpath="//button[normalize-space()='Cancel']"
      user_roles_dropdown="#reka-popover-trigger-v-40"
      user_roles_dropdown_save_xpath="//button[normalize-space()='Save']"
      user_roles_dropdown_cancel_xpath="//button[normalize-space()='Cancel']"
      create_role='a[href="/admin/roles"]'
      button_create_role_xpath="//button[normalize-space()='Create Role']"
      create_role_input="#name"
      create_role_create="div[role='dialog'] button:nth-child(2)"
      create_role_cancel="body > div:nth-child(5) > div:nth-child(3) > button:nth-child(1)"
      delete_role="div[role='menuitem']"
      delete_confirm="body > div:nth-child(5) > div:nth-child(3) > button:nth-child(2)"
      delete_cancel="body > div:nth-child(5) > div:nth-child(3) > button:nth-child(1)"
      delete="body > div:nth-child(5) > div:nth-child(2) > button:nth-child(2)"
      cancel="body > div:nth-child(5) > div:nth-child(2) > button:nth-child(1)"
}

export default new stcPage();
