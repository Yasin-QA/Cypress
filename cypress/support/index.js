Cypress.on('uncaught:exception', (err, runnable) => {
    // Check if the error message contains 'angular is not defined'
    if (err.message.includes('angular is not defined')) {
      // returning false prevents Cypress from failing the test
      return false;
    }
    // Let other errors fail the test
    return true;
  });
  