// Actualización automática de créditos aprobados al cambiar estado a "Aprobado"
const pipeline = [
  {
    $match: {
      operationType: "update",
      "updateDescription.updatedFields.estado": "Aprobado"
    }
  }
];

const changeStream = db.inscripciones.watch(pipeline);

changeStream.on("change", async (next) => {
  const inscripcion = await db.inscripciones.findOne({ _id: next.documentKey._id });

  const estudianteId = inscripcion.id_estudiante;
  const materia = await db.materias.findOne({ _id: inscripcion.id_materia });

  await db.estudiantes.updateOne(
    { _id: estudianteId },
    { $inc: { creditos_aprobados: materia.creditos } }
  );
});