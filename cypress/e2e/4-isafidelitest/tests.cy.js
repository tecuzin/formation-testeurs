/// <reference types="cypress" />

//import '../ActorAction/User';

//const USER = require('../../fixtures/users.json')
//const user = require('../ActorAction/User');

import User from "./ActorAction/User";

context('Application IsaFideliTest', () => {

    beforeEach(() => {
        const base_url = 'http://fidelitest.isagri.fr'
        cy.visit(base_url)
    })

    describe('Login to the app', () => {

        it.only('As a user \n I can create an account', () => {
            User.goToTheApp();
            User.register();
            User.addTickets(3);

            User.gotoTheApp();
            User.addTickets(3);
            User.listTickets();
            User.removeTicket(user.listTickets().first())

            User.creeUnCompte()


        })

        it('As a user \n I can connect to the app', () => {

        })

    })

})
