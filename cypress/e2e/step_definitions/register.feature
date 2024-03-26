Feature: Registro de Usuário

Scenario: Registro bem-sucedido
    Given Que estou na página de registro
    And Seleciono o genero
    And Eu preencho os campos obrigatorios "Jony", "Alvares", "4", "February", "1990", "<Email>" e "password1"
    When Clico no botão de registro
    Then O registro é criado e vejo uma mensagem de sucesso

Scenario: Registro mal-sucedido
    Given Que estou na página de registro
    And Eu não preencho os campos
    When Clico no botão de registro
    Then As mensagens de campos obrigatórios são exibidas
