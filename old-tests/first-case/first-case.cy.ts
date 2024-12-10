import {ThreeApp} from "../../core/ThreeApp";


describe('first-case', () => {
    // beforeEach(() => {
    //     // cy.visit(baseURL)
    //     cy.visit(ThreeApp.pageLanding.url)
    //     cy.wait(2000);
    //     cy.screenshot()
    //     cy.visit(ThreeApp.pageLK.url)
    //     cy.visit('/////')
    // })
    //
    // it('2 не равно 3 - кладем кейс', () => {
    //     expect(2).to.equal(3);
    // });
    //
    // it('2 не равно 3 - успех', () => {
    //     expect(2).not.to.equal(3);
    // });

    it('spec a', () => {
        cy.visit('/')
        cy.contains('Page body')

        cy.window()
            .invoke('add', 2, 3)
            .should('equal', 5)

        cy.window()
            .invoke('sub', 2, 3)
            .should('equal', -1)
    })

})
