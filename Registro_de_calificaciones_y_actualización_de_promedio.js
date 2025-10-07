// Registro de calificaciones y actualización de promedio
const session = db.getMongo().startSession();
session.startTransaction();

try {
  const estudianteId = ObjectId("652017a8a17450ec88b14e23"); // Cambia
  const calificaciones = [
    { id_materia: ObjectId("65201a4e1b0aeffc6c2ce60f"), nota: 4.2 },
    { id_materia: ObjectId("65201a4e1b0aeffc6c2ce610"), nota: 3.6 }
  ];

  for (const item of calificaciones) {
    const estado = item.nota >= 3.0 ? "Aprobado" : "Reprobado";

    db.getSiblingDB("universidad").inscripciones.updateOne(
      { id_estudiante: estudianteId, id_materia: item.id_materia },
      {
        $set: {
          calificacion_final: item.nota,
          estado: estado
        }
      },
      { session }
    );
  }

  // Recalcular promedio
  const aprobadas = db.getSiblingDB("universidad").inscripciones.find({
    id_estudiante: estudianteId,
    estado: "Aprobado",
    calificacion_final: { $exists: true }
  }).toArray();

  const promedio = aprobadas.reduce((acc, curr) => acc + curr.calificacion_final, 0) / aprobadas.length;

  db.getSiblingDB("universidad").estudiantes.updateOne(
    { _id: estudianteId },
    { $set: { promedio: promedio.toFixed(2) } },
    { session }
  );

  session.commitTransaction();
  print("Calificaciones registradas y promedio actualizado");

} catch (e) {
  print("Error al registrar calificaciones:", e.message);
  session.abortTransaction();
} finally {
  session.endSession();
}