# DEVinHouse Projeto Módulo 3

Este repositório esta dividido em 3 subprojetos

- e2e: Automação do projeto com implementações backEnd e e2e
- BackEnd:
- FrontEnd: 


Abaixo segue informações básicas de acesso e funcionadades implementadas. Para mais funcionalidades verificar dentro das respectivas pastas (e2e, BackEnd, FrontEnd)

<br>

**Acessos**

Para acessar o site, utilize as seguintes credenciais 

```
usuario = grupo05-user
senha = projeto06
```

<br>

### **Swagger** 


O Swagger pode ser acesso através da URL `http://localhost:8282/swagger-ui/#/`

<br>

### **Docker BackEnd**

Através do comando abaixo, o BackEnd da aplicação é iniciado

```
  docker run -p 8282:8282 devinhouse-projeto07-brayan
```

baseURL formada: 

```
  http://localhost:8282/v1/
```

<br>

### **Docker FrontEnd**

Step 1: Acessar o diretorio de frontend

```
  *\devinhouse-projeto-7\Projetos\FrontEnd\front-processos
```

Step 2: Subir a aplicação

```
 docker-compose up
```

Step 3: Acessar a url

```
  http://localhost:3000
```
