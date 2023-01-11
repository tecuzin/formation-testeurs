 class User {

    role;
    nom;
    prenom;

    seConnecte(){}
    seDeconnecte(){}
    register(){

    }
    listeTickets(){
        return listeDesTickets
    }
    removeTicket(ticketASupprimer){}

    creeUnCompte() {
        cy.accederAuFormulaireInscription()
        rempliFormulaireInscription()
        sauverDonneesSession()
    }

    sauverDonneesSession() {
        /* cy
            .writeFile(
                'userdata.json',
                window.localStorage
                    .getItem('isafidelitest_compte')
            ) */
    }

    accederAuFormulaireInscription() {
        cy
            .get('.mat-card-actions > .mat-focus-indicator')
            .click()
    }

    rempliFormulaireInscription() {
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

} export default User