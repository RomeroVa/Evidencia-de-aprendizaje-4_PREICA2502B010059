//**************************************************************************************//
// Función para crear una materia
function crearMateria(codigo, nombre, creditos, programaId, programaNombre) {
  return db.materias.insertOne({
    codigo,
    nombre,
    creditos,
    programa: { id: ObjectId(programaId), nombre: programaNombre }
  });
}

// Ejemplo:
crearMateria(
  "IS101",
  "Programación I",
  3,
  "68e4481f2f591af846402b76",
  "Ingeniería de Sistemas"
);

//**************************************************************************************//

// Función para leer materias con un filtro opcional
function leerMaterias(filtro) {
  return db.materias.find(filtro).toArray();
}

// Ejemplo: Buscar materia por código
printjson(leerMaterias({ codigo: "IS101" }));

//**************************************************************************************//

// Función para actualizar una materia por código
function actualizarMateria(codigo, actualizacion) {
  return db.materias.updateOne({ codigo }, { $set: actualizacion });
}

// Ejemplo: Actualizar créditos
actualizarMateria("IS101", { creditos: 4 });

//**************************************************************************************// 

// Función para eliminar una materia por código
function eliminarMateria(codigo) {
  const materia = db.materias.findOne({ codigo });
  if (!materia) {
    print("No existe materia con ese código");
    return;
  }
  // Validación simple: verificar si está asignada en inscripciones o profesores
  const inscripciones = db.inscripciones.find({ id_materia: materia._id }).count();
  const profesores = db.profesores.find({ "materias_asignadas.id_materia": materia._id }).count();
  
  if (inscripciones === 0 && profesores === 0) {
    return db.materias.deleteOne({ codigo });
  } else {
    print("No se puede eliminar: materia está asignada en inscripciones o profesores");
  }
}

// Ejemplo: Eliminar materia
eliminarMateria("IS101");