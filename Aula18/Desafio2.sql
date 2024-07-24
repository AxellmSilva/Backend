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