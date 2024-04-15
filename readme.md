# Teste NODE

- Criar um CRUD (API REST) em node para cadastro de usuários
- Para a criação do teste utilizar um repositório fake dos usuários. (Pode ser em memória)

## Regras

- Deve existir um usuário admin previamente cadastrado para utilizar autenticação (não precisa criptografar a senha);
  {
    name: "admin",
    email: "admin@spsgroup.com.br",
    type: "admin"
    password: "1234"
  }

- Criar rota de autenticação (Jwt token)
- As rotas da API só podem ser executadas se estiver autenticada
- Deve ser possível adicionar usuários. Campos: email, nome, type, password
- Não deve ser possível cadastrar o e-mail já cadastrado
- Deve ser possível remover usuário
- Deve ser possível alterar os dados do usuário

## Questões

- Qual outra arquitetura de software poderia ser usada para esse projeto?
- Qual banco de dados para armazenar os usuários?

## Respostas
- Poderia ser utilizada uma arquitetura combinando microserviços com monolito. Encarregando a parte de autenticação para um microserviço, enquanto a parte de usuários e outras entidas do sistema que se relacionam de forma mais direta com os usuários, como informações sobre atividades, outros cadastros e históricos, ficariam em um monolito. 
- Um banco relacional como o MySQL poderia ser utilizado, pela praticidade e robustez ao criar relacionamentos entre a entidade de usuários e outras entidades.