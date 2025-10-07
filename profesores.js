// 3️⃣ Insertar profesores con materias asignadas
const profesores = db.profesores.insertMany([
  {
    nombre: "Carlos Ramírez López",
    email: "carlos.ramirez@universidad.edu.co",
    especialidades: ["Programación", "Bases de Datos"],
    materias_asignadas: [
      { id_materia: materias[0], nombre: "Programación I" },
      { id_materia: materias[2], nombre: "Bases de Datos" }
    ]
  },
  {
    nombre: "Laura Gómez Martínez",
    email: "laura.gomez@universidad.edu.co",
    especialidades: ["Administración", "Finanzas"],
    materias_asignadas: [
      { id_materia: materias[4], nombre: "Fundamentos de Administración" },
      { id_materia: materias[7], nombre: "Finanzas Corporativas" }
    ]
  },
  {
    nombre: "Andrés Torres Castillo",
    email: "andres.torres@universidad.edu.co",
    especialidades: ["Psicología Clínica", "Neuropsicología"],
    materias_asignadas: [
      { id_materia: materias[10], nombre: "Neuropsicología" },
      { id_materia: materias[11], nombre: "Psicología Clínica" }
    ]
  },
  {
    nombre: "Paula Hernández Ríos",
    email: "paula.hernandez@universidad.edu.co",
    especialidades: ["Derecho Penal", "Derecho Civil"],
    materias_asignadas: [
      { id_materia: materias[14], nombre: "Derecho Penal" },
      { id_materia: materias[15], nombre: "Derecho Civil" }
    ]
  },
  {
    nombre: "Sergio López Vélez",
    email: "sergio.lopez@universidad.edu.co",
    especialidades: ["Educación", "Gestión Académica"],
    materias_asignadas: [
      { id_materia: materias[16], nombre: "Fundamentos de Educación" },
      { id_materia: materias[19], nombre: "Gestión Educativa" }
    ]
  }
]).insertedIds;