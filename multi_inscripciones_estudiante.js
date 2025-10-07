// Inscripción de estudiante en múltiples materias (TRANSACCIÓN)
const session = db.getMongo().startSession();
session.startTransaction();

try {
  const estudianteId = ObjectId("652017a8a17450ec88b14e23");  // Cambia por el ID del estudiante
  const materiasIds = [
    ObjectId("65201a4e1b0aeffc6c2ce60f"),
    ObjectId("65201a4e1b0aeffc6c2ce610")
  ]; // Cambia por los IDs de materias a inscribir
  const periodo = "2025-2";

  const estudiante = db.getSiblingDB("universidad").estudiantes.findOne({ _id: estudianteId });

  if (!estudiante) throw new Error("Estudiante no encontrado");

  for (const materiaId of materiasIds) {
    const materia = db.getSiblingDB("universidad").materias.findOne({ _id: materiaId });

    if (!materia) throw new Error("Materia no encontrada: " + materiaId);

    if (materia.programa.id.valueOf() !== estudiante.programa.id.valueOf()) {
      throw new Error(`La materia ${materia.nombre} no pertenece al programa del estudiante`);
    }

    const yaInscrito = db.getSiblingDB("universidad").inscripciones.findOne({
      id_estudiante: estudianteId,
      id_materia: materiaId,
      periodo: periodo
    });

    if (yaInscrito) throw new Error(`Estudiante ya inscrito en ${materia.nombre} para el periodo ${periodo}`);

    db.getSiblingDB("universidad").inscripciones.insertOne({
      id_estudiante: estudianteId,
      id_materia: materiaId,
      periodo: periodo,
      fecha_inscripcion: new Date(),
      estado: "Inscrito"
    }, { session });
  }

  session.commitTransaction();
  print("Inscripción completada exitosamente");

} catch (e) {
  print("Error durante la inscripción:", e.message);
  session.abortTransaction();
} finally {
  session.endSession();
}