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