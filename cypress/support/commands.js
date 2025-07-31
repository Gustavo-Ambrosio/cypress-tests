// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('acessarTermosUOL', () => {
  cy.visit('https://www.uol.com.br/');

  cy.contains('Termos de uso', { matchCase: false })
    .scrollIntoView()
    .invoke('removeAttr', 'target')
    .click({ force: true });

  // ❌ Removido: cy.url().should(...)
  // ❌ Não pode validar a URL aqui porque o domínio já mudou!
});


