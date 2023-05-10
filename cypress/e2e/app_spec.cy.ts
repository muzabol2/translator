describe('App', () => {
  it('recognizes and translates text', () => {
    cy.visit('http://localhost:5173/')
    cy.get("[placeholder='Enter text to be translated...']").type('Dzień dobry')
    cy.contains('a', '(Polish)').click()
    cy.contains('div', '11/5000')
    cy.contains('textarea', 'Day of Good Day')
    cy.contains('select', 'English').select('German')
    cy.contains('textarea', 'Tag des Guten Tages')
    cy.get("[alt='Exchange Language']").click({ force: true })
    cy.contains('textarea', 'Dzień dobry')
  })
})
