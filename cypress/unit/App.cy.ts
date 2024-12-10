import App from './../../resources/lk/components/App.vue'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(App)
  })

    it('2 не равно 3 - краш', () => {
        expect(2).to.equal(3);
    });
})
