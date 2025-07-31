describe('Busca no Yahoo', () => {
  Cypress.on('uncaught:exception', () => false);

  it('Deve buscar “Pacto Soluções” no Yahoo e exibir resultados', () => {
    cy.visit('https://br.search.yahoo.com/');
    cy.get('input[name="p"]', { timeout: 10000 }).should('be.visible').type('Pacto Soluções{enter}');
    cy.get('#web ol li', { timeout: 10000 }).should('have.length.greaterThan', 0);

    cy.log('✅ Busca realizada com sucesso');
    console.log('✅ [TESTE OK] Resultados encontrados no Yahoo');

    // Captura de tela ao final
    cy.screenshot('yahoo-busca-final');
  });
});
