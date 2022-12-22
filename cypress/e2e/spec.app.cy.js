describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })


  it('should navigate to the resume page', () => {
    // Find a link with an href attribute containing "resume" and click it
    cy.get('a[href*="resume"]').click()

    // The new url should include "/resume"
    cy.url().should('include', '/resume')

    // The new page should contain an h1 with "My Resume"
    cy.get('h1').contains('My Resume')
  });


  it('should navigate to the blog page', () => {
    // Find a link with an href attribute containing "blog" and click it
    cy.get('a[href*="blog"]').click()

    // The new url should include "/blog"
    cy.url().should('include', '/blog')

    // The new page should contain an h1 with "Blog"
    cy.get('h1').contains('Blog')
  });


  it('should navigate to the projects page', () => {
    // Find a link with an href attribute containing "projects" and click it
    cy.get('a[href*="projects"]').click()

    // The new url should include "/projects"
    cy.url().should('include', '/projects')

    // The new page should contain an h1 with "My Projects"
    cy.get('h1').contains('My Projects')
  })
})