//**************************************************************************************//
// Función para crear un profesor
function crearProfesor(nombre, email, especialidades, materias_asignadas) {
  return db.profesores.insertOne({
    nombre,
    email,
    especialidades,
    materias_asignadas
  });
}

// Ejemplo:
crearProfesor(
  "Carlos Ramírez López",
  "carlos.ramirez@universidad.edu.co",
  ["Programación", "Bases de Datos"],
  [
    { id_materia: ObjectId("68e448402f591af846402b7b"), nombre: "Programación I" },
    { id_materia: ObjectId("68e448402f591af846402b7d"), nombre: "Bases de Datos" }
  ]
);

//**************************************************************************************//

// Función para leer profesores con un filtro opcional
function leerProfesores(filtro) {
  return db.profesores.find(filtro).toArray();
}

// Ejemplo: Buscar profesor por email
printjson(leerProfesores({ email: "carlos.ramirez@universidad.edu.co" }));

//**************************************************************************************//

// Función para actualizar un profesor por email
function actualizarProfesor(email, actualizacion) {
  return db.profesores.updateOne({ email }, { $set: actualizacion });
}

// Ejemplo: Actualizar especialidades (agregar una)
actualizarProfesor("carlos.ramirez@universidad.edu.co", { especialidades: ["Programación", "Bases de Datos", "Inteligencia Artificial"] });

//**************************************************************************************//

// Función para eliminar un profesor por email
function eliminarProfesor(email) {
  const profesor = db.profesores.findOne({ email });
  if (!profesor) {
    print("No existe profesor con ese email");
    return;
  }
  // Validación simple: verificar si tiene materias asignadas (puedes ajustarla)
  if (profesor.materias_asignadas.length === 0) {
    return db.profesores.deleteOne({ email });
  } else {
    print("No se puede eliminar: el profesor tiene materias asignadas");
  }
}

// Ejemplo: Eliminar profesor
eliminarProfesor("carlos.ramirez@universidad.edu.co");