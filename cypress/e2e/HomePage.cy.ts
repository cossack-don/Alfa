import {ThreeApp} from "../core/ThreeApp";
import {listTimeOuts, statusesApi,getDataAttr} from "../core/SharedHelpers";

// expect(response.body).to.have.length(10);
// expect(response.status).to.eq(201);
// expect(response.body.name).to.eq(userData.name);

describe('home-page', () => {
    beforeEach(() => {
        cy.intercept('/todos*').as('searchRequest');
    })

    it('Вводим значение в инпут поиска', () => {
        cy.visit(ThreeApp.pageLK.url)
        cy.url().should('include', '/lk');

        cy.wait(listTimeOuts["2000"]);
        cy.get(getDataAttr(ThreeApp.pageLK.elements.inputSearch)).type('15')
        cy.wait(listTimeOuts["2000"]);

        cy.get(getDataAttr(ThreeApp.pageLK.elements.buttonSearch)).click()
        cy.wait(4000);

        // Ожидание завершения запроса 'searchRequest' и получение тела ответа
        cy.wait('@searchRequest').then((interception) => {
            const responseBody = interception.response.body;
            const statusCode = interception.response.statusCode;
            console.log(responseBody); // Выводим тело ответа в консоль

            expect(statusCode).to.equal(200);

        });
    });

    it('Жмем кнопку очистить поиск и ждем список to do', () => {
        cy.visit(ThreeApp.pageLK.url)
        cy.get(getDataAttr(ThreeApp.pageLK.elements.buttonClearSearch)).click()
        cy.wait(listTimeOuts["2000"]);
        // Ожидаем завершения запроса 'searchRequest' и проверяем статус ответа
        cy.wait('@searchRequest').its('response.statusCode').should('eq', statusesApi['200']);
    });

})
