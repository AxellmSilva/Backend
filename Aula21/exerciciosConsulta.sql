SELECT departamento.localizacao, SUM(cargos.salario)
FROM empregados
JOIN cargos on empregados.titulo = cargos.titulo
JOIN departamentos on empregados.departamento_id = departamentos.departamento_id
GROUP BY departamentos.localizacao
HAVING SUM (cargos.salario)