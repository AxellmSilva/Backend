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


        USE ti3k5791_axellucas;

INSERT INTO Pedidos(idcliente, numeroPedido, valorTotal, dataPedido)
VALUES  (1, 'PED-001', 150.00, '2024-07-12'),
	(2, 'PED-002', 250.00, '2024-07-13'),
        (1, 'PED-003', 180.00, '2024-07-13');