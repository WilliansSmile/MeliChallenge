# MeliChalenge

- MeliChalenge é uma aplicação para avaliação.
- O MeliChalenge se trata de um portal no qual recebe por api alertas sobre distintos eventos de servidores tanto físicos como virtuais.

## Features
### Portal web

- O portal web, sem necessidade de autenticação, um usuário pode buscar alertas e servidores em uma barra de pesquisa;
### API
- Cadastro de servidores;
- Edição de servidores;
- Listagem de servidores;
- Criação de alerta;
- Listagem de alertas;
- Listagem do top 3 servers com mais alertas;
- Listagem dos alertas para o datatable

A biblioteca da API esta disponivel no link: https://documenter.getpostman.com/view/5472625/Tzm9kaW4

## Tech

O Melichalleng usa os seguinte open source projects para fincionar:
- [node.js] - Para o backend;
- [Express] - Para as rotas;
- [moment](https://www.npmjs.com/package/moment) - Para o tratamento das datas;
- [mysql2](https://www.npmjs.com/package/mysql2) - Para conexão com o banco;
- [Sequelize](https://www.npmjs.com/package/sequelize) - Para comunicação com o banco;
- [dotenv](https://www.npmjs.com/package/dotenv) - Para o arquivo .env;
- [Bootstrap](https://getbootstrap.com/) - Usado para o basico do HTML;
- [jQuery] - Para o datatable
- [dataTable](https://datatables.net/) - Para o exibição dos dados


## Instalação


Como esta no docker o necessário rodar o seguinte comando
```sh
docker-compose up
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.


Verfique o portal web no browser que preferir

```sh
localhost:8000
```



   [node.js]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>

