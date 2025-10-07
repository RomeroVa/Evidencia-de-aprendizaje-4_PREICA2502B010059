//**************************************************************************************//
// Función para crear una inscripción
function crearInscripcion(id_estudiante, id_materia, periodo, fecha_inscripcion, estado, calificacion_final) {
  return db.inscripciones.insertOne({
    id_estudiante: ObjectId(id_estudiante),
    id_materia: ObjectId(id_materia),
    periodo,
    fecha_inscripcion: new Date(fecha_inscripcion),
    estado,
    calificacion_final
  });
}

// Ejemplo:
crearInscripcion(
  "68e47ff6d5e403178b2b16a9",           // ID del estudiante
  "68e448402f591af846402b7b",           // ID de la materia
  "2025-1",                              // Periodo
  "2025-03-12T10:23:00.000Z",           // Fecha de inscripción
  "Aprobado",                            // Estado
  4.2                                    // Calificación final
);

//**************************************************************************************//

// Función para leer inscripciones con un filtro opcional
function leerInscripciones(filtro) {
  return db.inscripciones.find(filtro).toArray();
}

// Ejemplo: Buscar inscripciones de un estudiante
printjson(leerInscripciones({ id_estudiante: ObjectId("68e47ff6d5e403178b2b16a9") }));

//**************************************************************************************//

// Función para actualizar una inscripción por id_estudiante e id_materia
function actualizarInscripcion(id_estudiante, id_materia, actualizacion) {
  return db.inscripciones.updateOne(
    { id_estudiante: ObjectId(id_estudiante), id_materia: ObjectId(id_materia) },
    { $set: actualizacion }
  );
}

// Ejemplo: Cambiar el estado y calificación
actualizarInscripcion(
  "68e47ff6d5e403178b2b16a9",
  "68e448402f591af846402b7b",
  { estado: "Reprobado", calificacion_final: 2.8 }
);

//**************************************************************************************//

// Función para eliminar una inscripción por id_estudiante e id_materia
function eliminarInscripcion(id_estudiante, id_materia) {
  return db.inscripciones.deleteOne({
    id_estudiante: ObjectId(id_estudiante),
    id_materia: ObjectId(id_materia)
  });
}

// Ejemplo: Eliminar inscripción específica
eliminarInscripcion(
  "68e47ff6d5e403178b2b16a9",
  "68e448402f591af846402b7b"
);