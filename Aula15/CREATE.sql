USE ti3k5791_axellucas;


--CREATE TABLE IF NOT EXISTS clientes(...(Caso a tabela não existir ela será criada)
CREATE TABLE clientes(
    -- coluna / tipo de dado / restrição
    idClientes INT PRIMARY KEY,
    nome VARCHAR(100),
    telefone VARCHAR(100)
);

CREATE TABLE Pedidos(
    idPedido INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT,
    numeroPedido VARCHAR(50),
    valorTotal DECIMAL(10, 2),--diz o tamanho e quantas casas depois da vírgula
    dataPedido DATE,
    FOREIGN KEY (idClientes) REFERENCES clientes(idClientes)
);