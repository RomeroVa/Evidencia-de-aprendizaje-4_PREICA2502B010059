// Histórico académico de estudiantes
const pipeline = [
  {
    $match: {
      operationType: "update",
      "updateDescription.updatedFields.calificacion_final": { $exists: true }
    }
  }
];

const changeStream = db.inscripciones.watch(pipeline);

changeStream.on("change", async (next) => {
  const inscripcion = await db.inscripciones.findOne({ _id: next.documentKey._id });

  await db.historial_calificaciones.insertOne({
    inscripcion_id: inscripcion._id,
    id_estudiante: inscripcion.id_estudiante,
    id_materia: inscripcion.id_materia,
    nueva_calificacion: next.updateDescription.updatedFields.calificacion_final,
    fecha: new Date()
  });
});