
## Postman Collection para Testar a API

A coleção do Postman chamada **"Tutorials API"** está incluída neste repositório para facilitar os testes dos endpoints.

### Como Usar
1. Importe a Collection no Postman a partir do arquivo: `postman/Tutorials_API.postman_collection.json`.
2. Use as requisições definidas para testar os endpoints de **GET**, **POST** e **DELETE**.

A Collection fornece exemplos de requisições e formatos esperados para os dados da API.


------
Docker: Relacionar os Comandos Utilizados

### 1. Criar um Container de MySQL


docker run --name ct-db-mysql -e MYSQL_ROOT_PASSWORD=DSM@123 -p 3307:3306 -d mysql:latest



### 2. Validar o Funcionamento do MySQL
- **Validação com DBeaver**:
 

### 3. Criar uma Imagem para o Backend

docker build -t im-api .



### 4. Criar um Container para o Backend

docker run --name ct-api --network meurede -p 8080:8080 -d im-api
```


### 5. Logs dos Containers

docker logs ct-api
docker logs ct-db-mysql



### 6. Validar o Funcionamento da API

- **Utilização do Postman**:

  git add postman/Tutorials_API.postman_collection.json
  git commit -m "Adicionar Collection do Postman para testar a API de tutoriais"
  git push origin main


### 7. Excluir os Recursos Docker

docker stop ct-db-mysql
docker stop ct-api

docker rm ct-db-mysql
docker rm ct-api

docker rmi im-api
docker rmi mysql:latest


