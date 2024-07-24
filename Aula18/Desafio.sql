CREATE TABLE Produtos(
    ProdutosID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(25) NOT NULL,
    Categoria VARCHAR(40) NOT NULL,
    Preco FLOAT,
    Peso FLOAT,
    DataFrabicacao DATE,
    DataValidade DATE
);

ALTER TABLE Produtos
ADD Descricao VARCHAR(40);


INSERT INTO Produtos (ProdutosID, Nome, Categoria, Preco, Peso, DataFrabicacao, DataValidade, Descricao)
VALUES(1, "Café em pó", "Bebida", 12.99, 0.250, "2024-06-12", "2025-06-12", "Café em pó"),
        (2, "Presunto", "Frios", 29.20, 1, "2024-07-16", "2024-07-25", "Presunto Sadia"), 
        (3, "Cebola","Legume", 5.2, 0.400, "2024-07-24", "2024-08-24", "Cebola do campo"),
        (4, "Tomate", "Fruta", 4.49, 1, "2024-07-20", "2024-07-30", "Tomate do campo"),
        (5, "Banana", "Fruta", 8.87, 0.750, "2024-07-24", "2024-08-02", "Banana do campo"),
        (6, "Salgadinho", "Salgadinho", 4.30, 0.200, "2024-05-08", "2024-09-20", "Salgadinho fandangos"),
        (7, "Achocolatado em pó", "Bebida", 2.90, 0.750, "2024-07-07", "2024-10-06", "Bebida láctea em pó"),
        (8, "Queijo", "Frios", 29.99, 1, "2024-07-20", "2024-08-10", "Queijo fátiado muzzarela"),
        (9, "Mortadela", "Frios", 3.12, 1, "2024-07-18", "2024-08-11", "Mortadela fátiada"),
        (10, "Sabão em pó", "Limpeza", 12, 0.500, "2024-06-12", "2025-10-12", "Sabão em pó");

DELETE FROM Produtos
WHERE ProdutosID = 4

DELETE FROM Produtos
WHERE ProdutosID = 7

ALTER TABLE Produtos
ADD SemEstoque VARCHAR(20);

UPDATE Produtos
set SemEstoque = "Verdadeiro"

UPDATE Produtos
set SemEstoque = "Falso"
WHERE ProdutosID = 2

SELECT ProdutosID, SemEstoque
FROM Produtos 
WHERE ProdutosID <= 5
ORDER BY SemEstoque, ProdutosID DESC