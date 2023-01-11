/// <reference types="cypress" />

//import '../ActorAction/User';

//const USER = require('../../fixtures/users.json')
//const user = require('../ActorAction/User');

context('Application IsaFideliTest', () => {

    beforeEach(() => {
        const base_url = 'http://fidelitest.isagri.fr'
        cy.visit(base_url)
    })

    describe('Login to the app', () => {

        it.only('As a user \n I can create an account', () => {
            user.gotoTheApp();
            user.register();
            user.addTickets(3);

            user.gotoTheApp();
            user.addTickets(3);
            user.listTickets();
            user.removeTicket(user.listTickets().first())

            user.creeUnCompte()


        })

        it('As a user \n I can connect to the app', () => {

        })

    })

})
