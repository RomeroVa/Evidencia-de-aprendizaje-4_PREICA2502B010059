//**************************************************************************************//

// Función para crear un programa
function crearPrograma(nombre, facultad, nivel, duracion_semestres, requisitos_grado) {
  return db.programas.insertOne({
    nombre,
    facultad,
    nivel,
    duracion_semestres,
    requisitos_grado
  });
}

// Ejemplo:
crearPrograma(
  "Ingeniería de Sistemas",
  "Facultad de Ingeniería",
  "Pregrado",
  10,
  ["Proyecto de grado", "Práctica empresarial"]
);

//**************************************************************************************//

// Función para leer programas con un filtro opcional
function leerProgramas(filtro) {
  return db.programas.find(filtro).toArray();
}

// Ejemplo: Buscar por nombre
printjson(leerProgramas({ nombre: "Ingeniería de Sistemas" }));

//**************************************************************************************//

// Función para actualizar un programa por nombre
function actualizarPrograma(nombre, actualizacion) {
  return db.programas.updateOne(
    { nombre },
    { $set: actualizacion }
  );
}

// Ejemplo: Agregar un requisito de grado
actualizarPrograma("Ingeniería de Sistemas", {
  requisitos_grado: [
    "Proyecto de grado",
    "Práctica empresarial",
    "Inglés nivel B1"
  ]
});

//**************************************************************************************//

// Función para eliminar un programa por nombre
function eliminarPrograma(nombre) {
  const programa = db.programas.findOne({ nombre });
  if (!programa) {
    print("No existe programa con ese nombre");
    return;
  }

  // Validar si está siendo usado en estudiantes o materias
  const estudiantes = db.estudiantes.find({ "programa.id": programa._id }).count();
  const materias = db.materias.find({ "programa.id": programa._id }).count();

  if (estudiantes === 0 && materias === 0) {
    return db.programas.deleteOne({ nombre });
  } else {
    print("No se puede eliminar: el programa está asociado a estudiantes o materias");
  }
}

// Ejemplo:
eliminarPrograma("Ingeniería de Sistemas");