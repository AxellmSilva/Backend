-- Como inserir dados em uma tabela

INSERT INTO clientes (idClientes, nome, emailCliente)
VALUES (1,"João Silva", "joao.silva@email.com"),
        (2,"Maira Silva", "Maira.silva@email.com"),
        (3,"José Silva", "jose.silva@email.com"),
        (4,"Ana Silva", "Ana.silva@email.com");


-- Caso não se lembre qual dado foi posto
INSERT IGNORE INTO clientes (idClientes, nome, emailCliente)
VALUES (1,"João Silva", "joao.silva@email.com"),
        (2,"Maira Silva", "Maira.silva@email.com"),
        (3,"José Silva", "jose.silva@email.com"),
        (4,"Ana Silva", "Ana.silva@email.com"),
        (5,"Bianca silva", "Bianca.silva@email.com");