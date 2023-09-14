# API-EPS

Api-EPS

# EndPoints a realizar de dichas consultas:

1. Obtener todos los pacientes de manera alfabética. ✅

```bash
 GET http://localhost:6080/api/Pacientes
```

2. Obtener las citas de una fecha en específico , donde se ordene los pacientes de manera alfabética.
3. Obtener todos los médicos de una especialidad en específico (por ejemplo, **‘Cardiología’**). ✅

```bash
 GET http://localhost:6080/api/Medicos-Especialidad
```

4. Encontrar la próxima cita para un paciente en específico (por ejemplo, el paciente con **user_id 1**).
5. Encontrar todos los pacientes que tienen citas con un médico en específico (por ejemplo, el médico con **med_numMatriculaProfesional 1**).
6. Encontrar todas las citas de un día en específico (por ejemplo, **‘2023-07-12’**). ✅

```bash
 GET http://localhost:6080/api/CitasDia
```

7. Obtener todos los médicos con sus consultorios correspondientes. ✅

```bash
 GET http://localhost:6080/api/Medicos
```

8. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_numMatriculaProfesional 1 en ‘2023-07-12’**). ✅

```bash
 GET http://localhost:6080/api/Numero-Citas
```

9. Obtener lo/s consultorio/s donde se aplicó las citas de un paciente.
10. Obtener todas las citas realizadas por los pacientes de acuerdo al género registrado, siempre y cuando el estado de la cita se encuentra registrada como “Atendida”.
11. Insertar un paciente a la tabla usuario, donde si es menor de edad deberá solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente (El usuario deberá poder ingresar de manera personalizada los datos del usuario a ingresar).
12. Mostrar todas las citas que fueron rechazadas de un mes en específico. Dicha consulta deberá mostrar la fecha de la cita, el nombre del usuario y el médico designado.
