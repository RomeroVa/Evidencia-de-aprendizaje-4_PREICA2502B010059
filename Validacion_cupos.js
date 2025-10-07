// Validación de cupos en inscripciones
const pipeline = [{ $match: { operationType: "insert" } }];

const changeStream = db.inscripciones.watch(pipeline);

changeStream.on("change", async (next) => {
  const inscripcion = next.fullDocument;
  const materiaId = inscripcion.id_materia;

  const conteo = await db.inscripciones.countDocuments({ id_materia: materiaId });
  const materia = await db.materias.findOne({ _id: materiaId });

  if (conteo > materia.cupo_maximo) {
    // Revertimos o registramos alerta
    await db.alertas.insertOne({
      materia_id: materiaId,
      mensaje: "Cupo excedido en inscripción",
      total_inscritos: conteo,
      fecha: new Date()
    });

    // (Opcional) Eliminar inscripción automáticamente
    // await db.inscripciones.deleteOne({ _id: inscripcion._id });
  }
});