Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

import './commands'
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'
import 'cypress-iframe'