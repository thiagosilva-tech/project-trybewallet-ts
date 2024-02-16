# Projeto Trybewallet

O Trybewallet é uma aplicação web destinada a ajudar o usuário a gerenciar sua carteira de gastos em diversas moedas. Esta aplicação inclui funcionalidades como login, adição e remoção de despesas, exibição de despesas em uma tabela e edição de despesas.

## Requisitos do Projeto

### 1. Página Inicial de Login
Crie uma página inicial de login onde os usuários possam inserir seus dados de login.

- A rota para esta página deve ser `/`.
- A página deve conter campos para inserção de e-mail e senha.
- Deve haver um botão com o texto "Entrar".

### 2. Header da Página de Carteira
Desenvolva um cabeçalho para a página de carteira com as seguintes características:

- O componente `Header` deve ser renderizado dentro do componente `Wallet`.

### 3. Formulário de Adição de Despesa
Desenvolva um formulário para adicionar uma despesa à carteira, contendo as seguintes características:

- O componente `WalletForm` deve ser renderizado dentro do componente `Wallet`.
- Desenvolva a funcionalidade do botão "Adicionar despesa" de modo que, ao clicar no botão, as ações descritas sejam executadas.

### 4. Testes Unitários
Desenvolva testes para atingir uma cobertura total de 60% da aplicação.

### 5. Tabela de Gastos
Desenvolva uma tabela de gastos com as seguintes características:

- A tabela deve ter um cabeçalho com os seguintes valores: (Valores a serem preenchidos)
- A tabela deve ser alimentada pelo estado da aplicação, disponível na chave `expenses` do reducer `wallet`.

### 6. Botão para Deletar Despesa
Crie um botão para deletar uma despesa da tabela, com as seguintes características:

- O botão deve ser o último item da linha da tabela e deve ter o atributo `data-testid="delete-btn"`.
- Após o botão ser clicado, a despesa deve ser deletada do estado global, deixando de ser exibida na tabela. Além disso, o valor total exibido no header deve ser alterado.

Estes são os requisitos necessários para o desenvolvimento do projeto Trybewallets. Certifique-se de implementá-los adequadamente para obter o resultado desejado.

## Conclusão

O Trybewallet foi uma aplicação web poderosa para ajudar os usuários a gerenciar suas finanças de forma eficaz. Com uma interface amigável e funcionalidades úteis, esta aplicação é uma ferramenta valiosa para quem busca controlar seus gastos de forma organizada e eficiente.
