-- select não precisa do use

-- Consulta Simples:  retorna todos os dados da tabela
SELECT idCliente, nome, email
from clientes;

SELECT * FROM clientes;



--consulta com filtro: retorna dados com base em uma condição
SELECT email
FROM clientes
WHERE idClientes > 3;

--Consulta com ordenação retorna dados ordenados
SELECT idCliente,nome,emailCliente
FROM clientes
ORDER BY nome ASC; --ou DESC

SELECT nome, emailCliente AS emails
FROM Clientes
GROUP BY nome;

SELECT emailCliente AS email from clientes

--consulta com limite de resultados
SELECT idCliente, nome, email
from clientes
LIMIT 3;

--consulta de valores únicos
SELECT DISTINCT nome
FROM clientes;

--Consulta com função SUM:
SELECT SUM(valorTotal) AS valor_total_pedidos
from Pedidos;
--soma o valor total de pedidos.

--Consulta com a função AVG:
SELECT AVG (valorTotal) AS Media
FROM pedidos;
--Calcula o valor médio dos pedidos


SELECT MAX (valorTotal)
FROM pedidos;
--consulta o valor mais alto

SELECT MIN (valorTotal)
FROM pedidos;
--consulta o valor mais baixo

--Consulta com junção de Tabelas(JOIN):
SELECT clientes.idCliente, clientes.nome, clientes.email, pedidos.numeroPedido
from clientes
INNER JOIN Pedidos ON clientes.idCliente = Pedidos.idCliente;
--Seleciona clientes e seus pedidos correspondentes usando uma junção entre a tabela Clientes e Pedidos. next exemplo, inner JOIN combina registros de ambas as tabelas onde existem correspondências entre os camps idCliente.

--Consulta com junção de Tabelas(JOIN)
SELECT clientes.idCliente, clientes.nome, clientes.email, pedidos.numeroPedido
from clientes
LEFT JOIN Pedidos ON clientes.idCliente = Pedidos.idCliente;
--Ele retorna TODOS os clientes mesmo aqueles que não fizeram pedido algum.

SELECT clientes.idCliente, clientes.nome, clientes.email, pedidos.numeroPedido
from clientes
INNER JOIN Pedidos ON clientes.idCliente = Pedidos.idCliente
WHERE pedidos.valorTotal > 200;
--retorna os pedidos que são maior que 200.

Consulta com função COUNT:
SELECT COUNT(*)
FROM Pedidos;
--conta o número total de pedidos


