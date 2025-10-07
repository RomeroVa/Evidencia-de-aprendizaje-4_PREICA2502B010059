//**************************************************************************************//
// Función para crear un estudiante
function crearEstudiante(codigo, nombre, email, programaId, programaNombre, semestre_actual, promedio_acumulado) {
  return db.estudiantes.insertOne({
    codigo,
    nombre,
    email,
    programa: { id: ObjectId(programaId), nombre: programaNombre },
    semestre_actual,
    promedio_acumulado
  });
}

// Ejemplo con el primer estudiante
crearEstudiante(
  "EST021",
  "Valeria Romero",
  "valeria.romero@universidad.edu.co",
  "68e4481f2f591af846402b76",
  "Ingeniería de Sistemas",
  3,
  4.1
);

//**************************************************************************************//

// Función para leer estudiantes con un filtro opcional
function leerEstudiantes(filtro) {
  return db.estudiantes.find(filtro).toArray();
}

// Ejemplo: Buscar estudiante por código
printjson(leerEstudiantes({ codigo: "EST021" }));

//**************************************************************************************//

// Función para actualizar un estudiante por código
function actualizarEstudiante(codigo, actualizacion) {
  return db.estudiantes.updateOne({ codigo }, { $set: actualizacion });
}

// Ejemplo: Actualizar el semestre actual y promedio acumulado
actualizarEstudiante("EST021", { semestre_actual: 4, promedio_acumulado: 4.3 });

//**************************************************************************************//

// Función para eliminar un estudiante por código
function eliminarEstudiante(codigo) {
  const estudiante = db.estudiantes.findOne({ codigo });
  if (!estudiante) {
    print("No existe estudiante con ese código");
    return;
  }
  const inscripciones = db.inscripciones.find({ id_estudiante: estudiante._id }).count();
  if (inscripciones === 0) {
    return db.estudiantes.deleteOne({ codigo });
  } else {
    print("No se puede eliminar: estudiante tiene inscripciones activas");
  }
}

// Ejemplo: Eliminar estudiante
eliminarEstudiante("EST021");