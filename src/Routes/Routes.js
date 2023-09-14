import { Router } from "express";
import ConectDB from "../Database/connection.js";

const ROUTER = Router();

// 1. Obtener todos los pacientes de manera alfabética. ✅
ROUTER.get("/Pacientes", async (req, res) => {
  try {
    const db = await ConectDB();
    const collection = db.collection("usuario");
    const pacientes = await collection
      .find()
      .sort({ usu_nombres: 1 })
      .toArray();

    return pacientes.length > 0
      ? res.status(200).json({ msg: "Pacientes Encontrados", pacientes })
      : res.status(404).json({ msg: "No hay Pacientes" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 2. Endpoint
ROUTER.get("/Citas", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 3. Obtener todos los médicos de una especialidad en específico (por ejemplo, **‘Cardiología’**). ✅
ROUTER.get("/Medicos-Especialidad", async (req, res) => {
  try {
    const db = await ConectDB();
    const collection = db.collection("medico");
    const especialidad = await collection
      .find({
        med_especialidad: "Cardiología",
      })
      .toArray();

    return especialidad.length > 0
      ? res.status(200).json({
          msg: "Medicos Especializados en Cardiología Encontrados",
          especialidad,
        })
      : res
          .status(404)
          .json({ msg: "No hay Medicos Especializados en Cardiología" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 4. Endpoint
ROUTER.get("/Prox-Cita", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 5. Endpoint
ROUTER.get("/Paciente-Citas", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 6. Encontrar todas las citas de un día en específico (por ejemplo, **‘2023-07-12’**). ✅
ROUTER.get("/CitasDia", async (req, res) => {
  try {
    const db = await ConectDB();
    const collection = db.collection("cita");
    const citas = await collection
      .find({ cit_fecha: { $eq: new Date("2023-08-09") } })
      .toArray();

    return citas.length > 0
      ? res.status(200).json({
          msg: "Se han Encontrado todas las Citas de la Fecha 2023-08-09",
          citas,
        })
      : res.status(404).json({ msg: "No hay Citas para la fecha 2023-08-09" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 7. Obtener todos los médicos con sus consultorios correspondientes. ✅
ROUTER.get("/Medicos", async (req, res) => {
  try {
    const db = await ConectDB();
    const collection = db.collection("medico");
    const Medicos = await collection.find().toArray();

    return Medicos.length > 0
      ? res.status(200).json({
          msg: "Se han Encontrado todos los Medicos",
          Medicos,
        })
      : res.status(404).json({ msg: "No hay Medicos" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 8. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_numMatriculaProfesional 1 en ‘2023-07-12’**). ✅
ROUTER.get("/Numero-Citas", async (req, res) => {
  try {
    const db = await ConectDB();
    const collection = db.collection("cita");
    const NumCitas = await collection
      .find({ cit_fecha: { $eq: new Date("2023-08-09") }, cit_medico: 1 })
      .count();

    return NumCitas > 0
      ? res.status(200).json({
          msg: "Total de Número de Citas del Medico 1 en la Fecha 2023-08-09",
          NumCitas,
        })
      : res
          .status(404)
          .json({ msg: "No hay Citas del Medico 1 en la Fecha 2023-08-09" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 9. Endpoint
ROUTER.get("/Consultorios", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 10. Endpoint
ROUTER.get("/Medicos", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 11. Endpoint
ROUTER.post("/Paciente", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 12. Endpoint
ROUTER.get("/Citas-Rechazadas", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default ROUTER;
