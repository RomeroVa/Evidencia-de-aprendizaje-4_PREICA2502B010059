// Retiro de materia con actualización (si aplica)
const session = db.getMongo().startSession();
session.startTransaction();

try {
  const estudianteId = ObjectId("652017a8a17450ec88b14e23"); // Cambia
  const materiaId = ObjectId("65201a4e1b0aeffc6c2ce60f"); // Cambia
  const periodo = "2025-2";

  const inscripcion = db.getSiblingDB("universidad").inscripciones.findOne({
    id_estudiante: estudianteId,
    id_materia: materiaId,
    periodo: periodo
  });

  if (!inscripcion || inscripcion.estado !== "Inscrito") {
    throw new Error("No se puede retirar: estado inválido o no inscrito");
  }

  db.getSiblingDB("universidad").inscripciones.updateOne(
    {
      id_estudiante: estudianteId,
      id_materia: materiaId,
      periodo: periodo
    },
    {
      $set: { estado: "Retirado" }
    },
    { session }
  );

  session.commitTransaction();
  print("Materia retirada correctamente");

} catch (e) {
  print("Error al retirar materia:", e.message);
  session.abortTransaction();
} finally {
  session.endSession();
}