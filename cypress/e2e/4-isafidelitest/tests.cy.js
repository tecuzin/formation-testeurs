/// <reference types="cypress" />

const USER = require('../../fixtures/users.json')

context('Application IsaFideliTest', () => {

    beforeEach(() => {
        const base_url = 'http://fidelitest.isagri.fr'
        cy.visit(base_url)
    })

    describe('Login to the app', () => {

        it.only('As a user \n I can create an account', () => {
            cy.accederAuFormulaireInscription()
            rempliFormulaireInscription()
            sauverDonneesSession()

            function sauverDonneesSession() {
                /* cy
                    .writeFile(
                        'userdata.json',
                        window.localStorage
                            .getItem('isafidelitest_compte')
                    ) */
            }

            function accederAuFormulaireInscription() {
                cy
                    .get('.mat-card-actions > .mat-focus-indicator')
                    .click()
            }

            function rempliFormulaireInscription() {
                cy.get('[formcontrolname="nom"]').type(USER[0].name)
                cy.get('[formcontrolname="prenom"]').type(USER[0].username)
                cy.get('[formcontrolname="adresse"]').type(USER[0].address.street)
                cy.get('[formcontrolname="codePostal"]').type(USER[0].address.zipcode)
                cy.get('[formcontrolname="ville"]').type(USER[0].address.city)
                cy.get('[formcontrolname="email"]').type(USER[0].email)
                cy.get('[formcontrolname="dateNaissance"]').type('01012022')
                cy.get('[formcontrolname="numeroCarteFidelite"]').type(USER[0].username)
                cy.get('#mat-slide-toggle-1-input').click({ force: true })
                cy.contains('Enregistrer').click()
            }
        })

        it('As a user \n I can connect to the app', () => {

        })

    })

})