describe('Funcionalidad de Login', () => {
  it('Mi aplicación carga leyendo Home en /', () => {
    // 01. Arrange: Setup del Estado de mi Aplicación
    cy.visit('/')

    // 02. Act: Interactuar con la Aplicación o ejecutar acciones
    cy.get('h1')
      .contains('Home') // 03. Assert: Espero un resultado
  })

  it('Probar el Login como CUSTOMER', () => {
    // Intercept lo uso para saber cuando una llamada a API es resuelta
    // y puedo esperarla en otro momento usando wait()
    cy.intercept('POST', 'http://localhost:3000/login').as('login')
    // Arrange
    cy.visit('/login')
    const email = 'drstrange@marvel.com'
    const password = 'multiverso'

    // Act
    cy.doLogin(email, password)

    cy.wait('@login')
    // Assert
    // cy.url().should('include', '/dashboard')
    cy.get('h1').contains('Dashboard')
  })

  it('Cuando haga Logout como ADMIN me lleve a la página de Home', () => {
    cy.intercept('POST', 'http://localhost:3000/login').as('login')
    // Arrange
    cy.visit('/login')

    // Act
    cy.doLogin('superman@dc.com', 'superman')
    cy.wait('@login')

    cy.get('nav > ul li:last').click()
    // Assert
    cy.get('h1').should('have.text', 'Home')
  })
})
