![](https://portal.alphaedtech.org.br/images/edtech/logo-edtech.webp)

# Back-End

## Módulo 7 - JavaScript - Part 16

### Exercícios de classe 🏫

#### Questão 1
Crie uma página web para consulta de CEP e localidade de forma que:
* Possua um campo para que o usuário digite o CEP;
* Faça uma ‘pré-verificação’ se o CEP é válido antes de habilitar o botão de consulta;
* Deve haver um botão de “Consultar” que será habilitado se tiver um campo que preencha os requisitos de validação de CEP do lado do cliente (esta validação foi feita no exercício 2 da parte 7 deste módulo);
* Ao clicar em ‘Consultar’ deve-se fazer uma requisição à API de CEP que deve retornar na página o resultado da consulta:
  - Endereço;
  - Bairro;
  - Cidade;
  - Estado;
  - Latitude;
  - Longitude;
  - Uma área de retorno de dados.
* Ao retornar os dados, exibir um botão do tipo ‘Exibir mapa’;
* Ao clicar no botão ‘Exibir mapa’, fazer uma consulta à API do ‘Google Maps’ e preencher em um ‘iframe’ na mesma página com o mapa obtido passando-se o parâmetro de ‘latitude’ e ‘longitude’.
* A área de ‘iframe’ deve ser conforme o CEP digitado;
* Utilizar o cursor ‘wait’ e ‘default’ para sinalizar consulta sendo realizada não permitindo ao usuário realizar operações enquanto o cursor não retornar ao ‘default’.
  - Caso a consulta de CEP retorne inválida:
  - Não exibir os resultados da consulta;
  - Exibir um erro de consulta de CEP do tipo ‘CEP inválido!’;
  - Não exibir botões de ‘Exibir mapa’ nem deve ter nenhum ‘iframe’ com mapa em exibição.


###### tags: `módulo 7` `back-end` `JavaScript`

