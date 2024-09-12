describe('Test Suite1', () => {
  it('My First Test', () => {
    cy.log("Test1 has started");
    cy.visit('https://www.youtube.com/')
    cy.log("Navigated to Youtube");
    cy.get('input[id="search"]').type("Java Script by Testers Talk");
    cy.get('button[id="search-icon-legacy"]>yt-icon').click();
    cy.log("Test1 is completed....")
    cy.log("Git Commit From VS Code")


  })
})