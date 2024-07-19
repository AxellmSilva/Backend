USE ti3k5791_axellucas;

-- Para adicionar algo
ALTER TABLE clientes
ADD email VARCHAR(100);


-- Para modificar algo
ALTER TABLE clientes
MODIFY email TEXT;

-- Para mudar o nome da coluna
ALTER TABLE clientes
CHANGE COLUMN  email emailCliente VARCHAR(255);


-- Para apagar uma coluna
ALTER TABLE clientes
DROP COLUMN telefone;

-- Para alterar uma tabela já criada e alterar o nome dela
ALTER TABLE clientes
RENAME TO Clientes;

