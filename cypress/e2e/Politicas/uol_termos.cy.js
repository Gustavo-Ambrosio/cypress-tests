describe('Validação dos Termos da UOL', () => {
  Cypress.on('uncaught:exception', () => false);

  it('Acessa os termos da UOL e verifica menção à possibilidade de atualização', () => {
    cy.acessarTermosUOL();

    cy.origin('https://noticias.uol.com.br', () => {
      // Valida que o domínio correto foi alcançado
      cy.url().should('include', 'termos-de-uso');

      // Verifica se o resumo aparece com a menção à possibilidade de atualização
      cy.contains(
        'tais como a possibilidade de atualização desse documento a qualquer momento',
        { timeout: 10000 }
      ).should('exist');

      cy.log('✅ Termos acessados com sucesso!');
      cy.log('📄 Documento menciona que pode ser atualizado a qualquer momento.');

      console.log('✅ Termos acessados com sucesso.');
      console.log('📄 Documento menciona possibilidade de atualização futura.');

    });
  });
});
