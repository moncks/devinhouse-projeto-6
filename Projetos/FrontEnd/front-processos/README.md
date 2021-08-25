# Documentação do FrontEnd


### **Funcionalidades**

- [Front-end] Deverá ser criado formulário de login com validação de campos e que deve ser exibida caso o usuário não esteja autenticado
- [Front-end] Deverá ser criado componente de layout com AppBar contendo menu e exibir as informações de usuários com ação de sair (deslogar)
- [Front-end] Deverá ser adicionado opção para o usuário escolher entre dark e light theme, mantendo o tema selecionado mesmo que o usuário atualize a página
- [Front-end] Deverá ser criado página para listar os processos obtidos pelo endpoint de listagem da API
  - Deverá ser exibido em formato de card
  - Deverá apresentar Skeleton enquanto está sendo feito o fetch na API
  - Deverá ter opção de editar o processo
  - Deverá ter opção de excluir o processo
  - Deverá ter opção para adição de um novo processo
- [Front-end] Deverá ser criado página para criação de um novo processo contendo formulário com validação de campos, ela deve ser aberta pela ação de adicionar da página de listagem
- [Front-end] Deverá ser criado página para edição de um processo podendo ser utilizado o mesmo formulário usada na criação de processos, ela deve ser aberta pela ação do card
- [Front-end] Deverá ser adicionado ação na opção de excluir processo pelo card
- [Front-end] Deverá ser adicionado filtro de busca número do processo ou assunto (deve ter as duas possibilidades, porém o usuário escolhe uma ou outra)
- [Front-end] Deverá ser adicionado testes unitários com no mínimo de 50% de cobertura de código
- [Front-end] Deverá ser crido projeto de e2e com cypress e possuir a implementação de pelo menos um teste de ponta a ponta

<br>

### **Requisitos**

- O projeto de front deve ser criado projeto utilizando React com CRA template
- Utilizar Material-UI para estilização dos componentes
- Utilizar Formik para criação dos formulários
- Utilizar Yup para validação dos formulários
- Utilizar React Testing Library para realizar os testes unitários do Front-end
- Utilizar Cypress para o desenvolvimento dos testes de e2e
- Utilizar React Router DOM para navegação entre as páginas
- Se for necessário algum gerenciamento de estado global utilize a Contex API

<br>


## Comando para rodar o projeto

### Executar o projeto
```
yarn start
```

Abrir a url [http://localhost:3000](http://localhost:3000) 

### Rodar os testes da aplicação

```
yarn test
```

### Deployment
```
yarn build
```
