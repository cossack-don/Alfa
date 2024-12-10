Конфигурация
https://cypress-documentation.vercel.app/guides/references/configuration#Timeouts

Ошибки-фиксы
https://stackoverflow.com/questions/76131497/when-setting-up-cypress-configfile-is-invalid
https://codereviewvideos.com/how-i-fixed-weve-found-2-cypress-configuration-files-named-cypress-config-ts-cypress-config-js/

Об ошикбах офф дока
https://cypress-documentation.vercel.app/guides/references/error-messages#We-found-an-error-preparing-your-test-file


Репа с настройками Пример
https://github.com/spiffytech/cypress-22071-repro

Папка cypress/fixtures 

используется для хранения фикстур (fixtures) – данных, которые могут быть использованы при тестировании с помощью Cypress. Фикстуры представляют собой статические данные, которые загружаются перед выполнением тестов и помогают создавать стабильные условия тестирования.


```
// cypress/fixtures/users.json
[
{
"id": 1,
"name": "Иван Иванов",
"email": "ivan@example.com"
},
{
"id": 2,
"name": "Анна Петрова",
"email": "anna@example.com"
}
]
```

```
// cypress/integration/user-list.spec.js
describe('User List', () => {
  beforeEach(() => {
    // Загружаем фикстуру users.json
    cy.fixture('users').then((users) => {
      // Имитируем ответ сервера с нашими пользователями
      cy.intercept('/api/users', { body: users });
    });
    
    // Переходим на страницу со списком пользователей
    cy.visit('/users');
  });

  it('should display the list of users', () => {
    // Проверяем, что таблица содержит два элемента
    cy.get('table tbody tr').should('have.length', 2);

    // Проверяем содержимое первой строки таблицы
    cy.contains('tr', 'Иван Иванов')
      .parent()
      .within(() => {
        cy.get('td:nth-child(2)').should('contain', 'Иван Иванов');
        cy.get('td:nth-child(3)').should('contain', 'ivan@example.com');
      });

    // Проверяем содержимое второй строки таблицы
    cy.contains('tr', 'Анна Петрова')
      .parent()
      .within(() => {
        cy.get('td:nth-child(2)').should('contain', 'Анна Петрова');
        cy.get('td:nth-child(3)').should('contain', 'anna@example.com');
      });
  });
});
```

для Е2Е

npx cypress run --spec "cypress/e2e/first-case/first-case.cy.ts"
npx cypress run
npx cypress run --spec "cypress/unit/App.cy.ts"

npx cypress run --spec "cypress/unit/**/*.ts"



для unit запуск
npx cypress run --component --spec cypress/unit/App.cy.ts


бест практики тестов
https://docs.cypress.io/app/core-concepts/best-practices

Примеры тестов - много
https://github.com/cypress-io/cypress-example-recipes#logging-in-recipes


https://www.lambdatest.com/blog/cypress-vs-playwright/




https://dev.to/muratkeremozcan/triple-combined-code-coverage-for-react-apps-with-jest-cypress-component-and-e2e-tests-using-github-actions-1icc


https://docs.cypress.io/app/plugins/plugins-list

https://github.com/cypress-io/code-coverage/tree/master/test-apps
https://github.com/istanbuljs/nyc

https://github.com/istanbuljs/babel-plugin-istanbul

https://github.com/testing-library/cypress-testing-library

https://github.com/cypress-io/code-coverage#internal-test-apps
