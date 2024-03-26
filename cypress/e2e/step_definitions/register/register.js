import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {faker} from '@faker-js/faker'

Given("Que estou na página de registro", () => {
    cy.visit('https://demo.nopcommerce.com/');
    cy.get('a.ico-register').click();
    cy.contains("Register").should("exist");

});

Given("Seleciono o genero", () => {
    cy.get("#gender-male").check();
});

Given("Eu preencho os campos obrigatorios {string}, {string}, {string}, {string}, {string}, {string} e {string}", (FirstName, LastName, Day, Month, Year, Password) => {
    cy.get('input[name="FirstName"]').type(FirstName);
    cy.get('input[name="LastName"]').type(LastName);
    cy.get('select[name="DateOfBirthDay"]').select(Day).should('have.value', Day);
    cy.get('select[name="DateOfBirthMonth"]').select(Month).should('contain', Month);
    cy.get('select[name="DateOfBirthYear"]').select(Year).should('have.value', Year);
    cy.get('input[name="Email"]').type(faker.internet.email());
    cy.get("#Password").type(Password);
    cy.get("#ConfirmPassword").type(Password);
});

When("Clico no botão de registro", () => {
    cy.get("#register-button").click();
});

Then("O registro é criado e vejo uma mensagem de sucesso", () => {
    cy.contains(".result", "Your registration completed").should("be.visible");
});


Given("Eu não preencho os campos", () => {
});

Then("As mensagens de campos obrigatórios são exibidas", () => {
    cy.get('#FirstName-error').should('be.visible').and('contain', 'First name is required.');
    cy.get('#LastName-error').should('be.visible').and('contain', 'Last name is required.');
    cy.get('#Email-error').should('be.visible').and('contain', 'Email is required.');
    cy.get('#Password-error').should('be.visible').and('contain', 'Password is required.');
    cy.get('#ConfirmPassword-error').should('be.visible').and('contain', 'Password is required.');
});