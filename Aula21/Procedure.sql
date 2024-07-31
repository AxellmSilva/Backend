DELIMITER //

CREATE PROCEDURE AumetarSalario(
    IN dep_id INT,
    IN porcentual DECIMAL(5,2)
)
BEGIN
    UPDATE cargos
    SET salario = salario + (salario * (percentual / 100))
    WHERE departamento_id = dep_id;
END //

DELIMITER ;

CALL AumentarSalario(1, 10);
