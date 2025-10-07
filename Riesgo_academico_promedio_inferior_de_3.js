// Monitoreo de estudiantes con promedio inferior a 3.0
const pipeline = [
  {
    $match: {
      operationType: "update",
      "updateDescription.updatedFields.promedio": { $exists: true }
    }
  }
];

const changeStream = db.estudiantes.watch(pipeline);

changeStream.on("change", (next) => {
  const nuevoPromedio = next.updateDescription.updatedFields.promedio;

  if (nuevoPromedio < 3.0) {
    db.alertas.insertOne({
      estudiante_id: next.documentKey._id,
      mensaje: "Estudiante en riesgo académico (promedio < 3.0)",
      promedio: nuevoPromedio,
      fecha: new Date()
    });
  }
});