describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () => {
    describe('Submit form', () => {
        it('Should count the result rows after submit', () => {
            // entrar al sitio
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');
            // llenar la forma
            cy.get('#dispDate').clear().type('05/05/2020');
            cy.get('#creditAmount').clear({force:true}).type('20000');
            cy.get('#paymentMethod').select('Mensual');
            cy.get('#period').select('2');
            cy.get('#rate').clear().type('15');
            cy.contains('Calcular').click();
            // quitar la modal
            cy.contains('Ahora no').click();
            // contar las filas
            cy.get('#resultadosSimulador>tbody').children().should('have.length',24);
        });
    });
}); 