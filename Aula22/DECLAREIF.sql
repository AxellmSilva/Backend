CREATE PROCEDURE mudarCargo(
    IN emp_id INT,
    IN novo_titulo VARCHAR(50)
)
BEGIN
    DECLARE titulo_existe INT; --aqui eu declaro uma váriavel

    -- verifica se o novo titulo existe na tabela cargos
    SELECT COUNT(*)
    INTO titulo_existe
    FROM cargos
    WHERE titulo = novo_titulo;

-- se o titulo existe, executa o código
    IF titulo_existe > 0 THEN
        --atualiza o titulo do empregado
        UPDATE empregados
        SET titulo = novo_titulo
        WHERE empregados_id = emp_id
    END IF;
END //