// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath')
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore ResizeObserver loop errors
  if (err.message.includes('ResizeObserver loop')) {
    return false
  }
  
  // Ignore "Too many requests" errors if you want
  if (err.message.includes('Too many requests')) {
    return false
  }
  
  // Let other real errors fail the test
  return true
})