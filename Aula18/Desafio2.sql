CREATE TABLE carros_aluguel(
    carrosaluguelID INT PRIMARY KEY AUTO_INCREMENT,
    modelocarro VARCHAR(20) NOT NULL,
    precoaluguelpordia FLOAT NOT NULL,
    cor VARCHAR(20),
    tipocombustivel VARCHAR(20),
    numeroportas INT,
    tipocarro VARCHAR(25)
);

INSERT INTO carros_aluguel(carrosaluguelID, modelocarro, precoaluguelpordia, cor, tipocombustivel, numeroportas, tipocarro)
VALUES(1,"Gol",230.00,"Preto","Gasolina",4,"Hatch"),
        (2,"Uno",120.00,"Vermelho","Gasolina",4,"Sedã"),
        (3,"Ka",150.00,"Cinza","Gasolina",4,"SUV"),
        (4,"Palio",180.00,"Prata","Gasolina",2,"Picape"),
        (5,"Siena",240.00,"Preto","Eletrico",2,"Crossover"),
        (6,"Fox",130.00,"Branco","Gasolina",4,"Perua"),
        (7,"Celta",180.00,"Preto","Gasolina",4,"Minivan"),
        (8,"Montana",220.00,"Vermelho","Gasolina",2,"Esportivo"),
        (9,"HB20",300.00,"Branco","Eletrico",4,"Furgão"),
        (10,"Onix",280.00,"Prata","Gasolina",4,"Hatch");

CREATE TABLE Clientes(
    clienteID INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    datanascimento DATE NOT NULL,
    telefone VARCHAR(100),
    endereco VARCHAR(100)

);

INSERT INTO Clientes(clienteID, nome, email, datanascimento, telefone, endereco)
VALUES(1, "Alessandra", "alessandra@email.com", "1990-08-20", "99 99999 9999", "R:Ave B:Avião C:Alabarda"),
        (2, "Bruna", "bruna@email.com", "1989-04-17", "99 99999 9998", "R:Bravo B:Basket C:Barco"),
        (3, "Cássia", "cassia@emai.com", "1992-03-02", "99 99999 9997", "R:Charlie B:Casaco C:Cruz"),
        (4, "Daniela", "daniela@email.com", "1998-11-08", "99 99999 9996", "R:Delta B:Diesel C:Damasco"),
        (5, "Erika", "erica@email.com", "1995-12-30", "99 99999 9995", "R:Echo B:Ervilha C:Escadaria");

CREATE TABLE alugueis_carros(
    alugueiscarrosID INT PRIMARY KEY AUTO_INCREMENT,
    clienteID INT,
    FOREIGN KEY (clienteID) REFERENCES Clientes(clienteID),
    carrosaluguelID INT,
    FOREIGN KEY (carrosaluguelID) REFERENCES carros_aluguel(carrosaluguelID),
    datadeinicio DATE,
    datadetermino DATE,
    valortotalaluguel FLOAT
);

INSERT IGNORE INTO alugueis_carros(alugueiscarrosID, clienteID, carrosaluguelID, datadeinicio, datadetermino, valortotalaluguel)
VALUES(1,1,1,"2024-01-01", "2024-01-02",230.00),
        (2,1,2,"2024-01-03", "2024-01-04",120.00),
        (3,1,3,"2024-01-05", "2024-01-06",150.00),
        (4,1,4,"2024-01-07", "2024-01-08",180.00),
        (5,1,5,"2024-01-09", "2024-01-10",240.00),
        (6,1,6,"2024-01-11", "2024-01-12",130.00),
        (7,2,7,"2024-01-13", "2024-01-14",180.00),
        (8,2,8,"2024-01-15", "2024-01-16",220.00),
        (9,2,9,"2024-01-17", "2024-01-18",300.00),
        (10,2,10,"2024-01-19", "2024-01-20",280.00),
        (11,2,1,"2024-01-21", "2024-01-22",230.00),
        (12,2,2,"2024-01-23", "2024-01-24",120.00),
        (13,3,3,"2024-01-25", "2024-01-26",150.00),
        (14,3,4,"2024-01-27", "2024-01-28",180.00),
        (15,3,5,"2024-01-29", "2024-01-30",240.00),
        (16,3,6,"2024-01-31", "2024-02-01",130.00),
        (17,4,7,"2024-02-02", "2024-02-03",180.00),
        (18,4,8,"2024-02-04", "2024-02-05",220.00),
        (19,4,9,"2024-02-06", "2024-02-07",300.00),
        (20,4,10,"2024-02-08", "2024-02-09",280.00),
        (21,5,1,"2024-02-10", "2024-02-11",230.00),
        (22,5,2,"2024-02-12", "2024-02-13",120.00),
        (23,5,3,"2024-02-14", "2024-02-15",150.00),
        (24,5,4,"2024-02-16", "2024-02-17",180.00),
        (25,5,5,"2024-02-18", "2024-02-19",240.00),
        (26,5,6,"2024-02-20", "2024-02-21",130.00),
        (27,5,7,"2024-02-22", "2024-02-23",180.00),
        (28,5,8,"2024-02-24", "2024-02-25",220.00),
        (29,5,9,"2024-02-26", "2024-02-27",300.00),
        (30,5,10,"2024-02-28", "2024-02-29",280.00);


SELECT clienteID, SUM(valortotalaluguel)
from alugueis_carros
GROUP BY clienteID;

