use empresas;

DELIMITER //

CREATE PROCEDURE mudarTitulo(
    IN dep_id INT,
	IN titulo VARCHAR(50)
)
    
BEGIN
    UPDATE departamentos
    SET nome = titulo
    WHERE departamento_id = dep_id;
END //

DELIMITER ;

CALL mudarTitulo(1, "Teste");



use empresas;

DELIMITER //

CREATE PROCEDURE transfirirEmpregado(
    IN employee_id INT,
    IN departamento VARCHAR(50)
)

BEGIN
    UPDATE empregados
    SET titulo = departamento
    WHERE empregados_id = employee_id;
END //

DELIMITER ;
    
use empresas;

CALL transfirirEmpregado(1,"Gerente");