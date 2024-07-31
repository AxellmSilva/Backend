CREATE TABLE departamentos(
    departamento_id INT AUTO_INCREMET PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE empregados(
    empregados_id INT AUTO_INCREMET PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    salario DECIMAL (10,2) NOT NULL,
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENSES departamentos(departamento_id)
);

INSERT INTO departamentos (nome) VALUES
('Vendas'),
('Marketing'),
('TI'),
('Recursos Humanos');

INSERT INTO empregados(nome, salario, departamento_id)
VALUES('Ana', 5000.00, 1),
        ('Bruna', 6000.00, 1),
        ('Carla', 4000.00, 2),
        ('Daniela', 5500.00, 3),
        ('Erica', 7000.00, 3),
        ('Fernanda', 3000.00, 4),
        ('Gabriela', 4500.00, 2),
        ('Helen', 3500.00, 1);

ALTER TABLE departamentos
ADD localizacao VARCHAR(100);

UPDATE departamentos
SET localizacao ="São Paulo" 
WHERE nome = "Vendas";

UPDATE departamentos
SET localizacao ="Rio de Janeiro" 
WHERE nome = "Marketing";

UPDATE departamentos
SET localizacao ="São Paulo" 
WHERE nome = "TI";

UPDATE departamentos
SET localizacao ="Belo Horizonte" 
WHERE nome = "Recursos Humanos";

SELECT nome
from empregados
WHERE departamento_id IN(SELECT departamento_id FROM departamentos WHERE localizacao ="São Paulo");