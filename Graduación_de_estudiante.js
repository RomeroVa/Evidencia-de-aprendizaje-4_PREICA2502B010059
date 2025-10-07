// Graduación de estudiante
const session = db.getMongo().startSession();
session.startTransaction();

try {
  const estudianteId = ObjectId("652017a8a17450ec88b14e23"); // Cambia

  const estudiante = db.getSiblingDB("universidad").estudiantes.findOne({ _id: estudianteId });
  if (!estudiante) throw new Error("Estudiante no encontrado");

  if (estudiante.semestre_actual < estudiante.programa.duracion_semestres) {
    throw new Error("El estudiante aún no está en el último semestre");
  }

  if (!estudiante.promedio || estudiante.promedio < 3.0) {
    throw new Error("El estudiante no cumple el promedio mínimo");
  }

  // Actualizar estado a Graduado
  db.getSiblingDB("universidad").estudiantes.updateOne(
    { _id: estudianteId },
    { $set: { estado: "Graduado" } },
    { session }
  );

  // Registrar en colección de graduados (opcional)
  db.getSiblingDB("universidad").graduados.insertOne({
    id_estudiante: estudiante._id,
    nombre: estudiante.nombre,
    programa: estudiante.programa,
    fecha_graduacion: new Date()
  }, { session });

  session.commitTransaction();
  print("Estudiante graduado exitosamente");

} catch (e) {
  print("Error durante graduación:", e.message);
  session.abortTransaction();
} finally {
  session.endSession();
}