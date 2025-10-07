// Auditoría de cambios en la colección "estudiantes"
const pipeline = [
  { $match: { operationType: { $in: ["update", "replace"] } } }
];

const changeStream = db.estudiantes.watch(pipeline);

changeStream.on("change", (next) => {
  db.auditoria_estudiantes.insertOne({
    estudiante_id: next.documentKey._id,
    cambio: next.updateDescription,
    fecha: new Date(),
    operacion: next.operationType
  });
});