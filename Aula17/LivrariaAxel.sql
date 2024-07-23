USE livrariaaxel;

CREATE TABLE Autores(
    AutorID INT PRIMARY KEY AUTO_INCREMENT,
    Nome TEXT NOT NULL,
    Nacionalidade TEXT
);

CREATE TABLE Livros(
    LivroID INT PRIMARY KEY AUTO_INCREMENT,
    Titulo TEXT NOT NULL,
    Endereco TEXT,
    Telefone TEXT
);

CREATE TABLE Clientes(
    ClienteID INT PRIMARY KEY AUTO_INCREMENT,
    Nome TEXT NOT NULL,
    Endereco TEXT,
    Telefone TEXT
);

CREATE TABLE Emprestimos(
    EmprestimoID INT PRIMARY KEY AUTO_INCREMENT,
    LivroID INT,
    ClienteID INT,
    FOREIGN KEY (LivroID) REFERENCES Livros(LivroID),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    DataEmprestimo DATE,
    DataDevolucao DATE

);

INSERT INTO Autores(Nome, Nacionalidade)
VALUES("josé de la torre", "Mexican"),
        ("John knowville", "American"),
        ("Pedro Raimundo", "Brazilian");

INSERT INTO Livros(LivroID, Titulo, Endereco, Telefone)
VALUES(1,"Chão e Pão", "R:Dois. B:Sergipe. C:Cinza", "99 99999-9999"),
        (2,"Som do Trovão", "R:Doze. B:Santa Catarina. C:Azul", "99 99999-8888"),
        (3,"Café com Leite", "R: VINTE. B:Minas Gerais. C:Verde", "99 99999-7777");

INSERT INTO Clientes(Nome, Endereco, Telefone)
VALUES("Manuel Teixeira", "R:Cinco. B:São Paulo. C:Roxo", "99 88888-9999"),
        ("Carlos Zacarias", "R:Quinze. B:Pernambuco. C:Laranja", "99 88888-9998"),
        ("Júlio Quadros", "R:Vinte e cinco. B:Goías. C:Preto", "99 88888-9997");

ALTER TABLE Autores
ADD DataNascimento DATE;

ALTER TABLE Autores 
ADD Biografia TEXT;

ALTER TABLE Livros
ADD Editora TEXT;

ALTER TABLE Livros
ADD NumeroPaginas INT;

ALTER TABLE Livros
ADD Idioma TEXT;

ALTER TABLE Clientes
ADD Email TEXT;

ALTER TABLE Clientes
ADD DataNascimento DATE;

ALTER TABLE Emprestimos
ADD DataPrevistaDevolucao DATE;

ALTER TABLE Emprestimos
ADD Estatus TEXT;

UPDATE Autores
set DataNascimento = "1954-10-22",
    Biografia = "Amante de livros"
WHERE AutorID = 1;


UPDATE Autores
set DataNascimento = "1938-04-08",
    Biografia = "Detalhista ao detalhe"
WHERE AutorID = 2;


UPDATE Autores
set DataNascimento = "1964-02-10",
    Biografia = "Autodidata"
WHERE AutorID = 3;

UPDATE Clientes
set Email = "manuelteixeira@email.com",
    DataNascimento= "1990-12-12"
WHERE ClienteID = 1;

UPDATE Clientes
set Email = "carloszacarias@email.com",
    DataNascimento= "1990-10-09"
WHERE ClienteID = 2;

UPDATE Clientes
set Email = "julioquadros@email.com",
    DataNascimento= "1993-02-20"
WHERE ClienteID = 3;

INSERT INTO Emprestimos(LivroID, ClienteID, DataEmprestimo, DataDevolucao, DataPrevistaDevolucao, Estatus)
VALUES(1, 1,"2024-07-19", "2024-07-22", "2024-07-29","Disponível"),
        (2, 3, "2024-07-20", "2024-07-23", "2024-07-30", "Diponível"),
        (3, 2, "2024-06-18", "2024-06-22", "2024-06-29", "Disponível");

UPDATE Clientes
set Editora = "Lagoa",
    NumeroPaginas= "230"
    Idioma="Português"
WHERE ClienteID = 1;
