USE ti3k5791_axellucas;


--CREATE TABLE IF NOT EXISTS clientes(...(Caso a tabela não existir ela será criada)
CREATE TABLE clientes(
    -- coluna / tipo de dado / restrição
    idClientes INT PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(100)
);