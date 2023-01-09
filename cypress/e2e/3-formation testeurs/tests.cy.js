/// <reference types="cypress" />

context('Formation nouveaux testeurs', () => {

    beforeEach(()=>{
        cy.visit('https://example.cypress.io/todo')
        var todos = '[{"title":"Pay electric bill","completed":false,"id":1673261877271},{"title":"payer ma facture","completed":false,"id":1673268895343},{"title":"Pay electric bill","completed":false,"id":1673271831017}]'
        window.localStorage.setItem('todos-vanillajs',todos)

    })

it('Ajouter une tâche', ()=>{
    // When je clique sur le rond
    cy.get('.toggle')
    .first()
    .click({force:true}) 
    cy.get('.toggle')
    .first()
    .screenshot()
    // Then la tâche est complétée
    cy.get('.toggle')
    .first()
    .parent()
    .parent()
    .should('have.class', 'completed')

    cy.get('.completed').find('input')

    cy.get('.completed')
    .first()
    .should('contain','electric')
    // Et elle apparaît en gris

    var maliste = ['a','b','c']

    for (let elementListe=maliste.length; elementListe>=1; elementListe--){

    }

    maliste.forEach((elementListe)=>{

    })


})

})