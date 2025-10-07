// 2️⃣ Insertar materias con referencia a programas
const materias = db.materias.insertMany([
  // Ingeniería de Sistemas
  { codigo: "IS101", nombre: "Programación I", creditos: 3, programa: { id: programas[0], nombre: "Ingeniería de Sistemas" } },
  { codigo: "IS102", nombre: "Estructuras de Datos", creditos: 3, programa: { id: programas[0], nombre: "Ingeniería de Sistemas" }, prerrequisitos: [] },
  { codigo: "IS201", nombre: "Bases de Datos", creditos: 3, programa: { id: programas[0], nombre: "Ingeniería de Sistemas" } },
  { codigo: "IS301", nombre: "Redes de Computadores", creditos: 3, programa: { id: programas[0], nombre: "Ingeniería de Sistemas" } },

  // Administración
  { codigo: "AD101", nombre: "Fundamentos de Administración", creditos: 3, programa: { id: programas[1], nombre: "Administración de Empresas" } },
  { codigo: "AD201", nombre: "Contabilidad General", creditos: 3, programa: { id: programas[1], nombre: "Administración de Empresas" } },
  { codigo: "AD301", nombre: "Marketing Estratégico", creditos: 3, programa: { id: programas[1], nombre: "Administración de Empresas" } },
  { codigo: "AD401", nombre: "Finanzas Corporativas", creditos: 3, programa: { id: programas[1], nombre: "Administración de Empresas" } },

  // Psicología
  { codigo: "PS101", nombre: "Introducción a la Psicología", creditos: 3, programa: { id: programas[2], nombre: "Psicología" } },
  { codigo: "PS201", nombre: "Psicología del Desarrollo", creditos: 3, programa: { id: programas[2], nombre: "Psicología" } },
  { codigo: "PS301", nombre: "Neuropsicología", creditos: 3, programa: { id: programas[2], nombre: "Psicología" } },
  { codigo: "PS401", nombre: "Psicología Clínica", creditos: 3, programa: { id: programas[2], nombre: "Psicología" } },

  // Derecho
  { codigo: "DR101", nombre: "Introducción al Derecho", creditos: 3, programa: { id: programas[3], nombre: "Derecho" } },
  { codigo: "DR201", nombre: "Derecho Constitucional", creditos: 3, programa: { id: programas[3], nombre: "Derecho" } },
  { codigo: "DR301", nombre: "Derecho Penal", creditos: 3, programa: { id: programas[3], nombre: "Derecho" } },
  { codigo: "DR401", nombre: "Derecho Civil", creditos: 3, programa: { id: programas[3], nombre: "Derecho" } },

  // Maestría en Educación
  { codigo: "ME101", nombre: "Fundamentos de Educación", creditos: 4, programa: { id: programas[4], nombre: "Maestría en Educación" } },
  { codigo: "ME201", nombre: "Pedagogía Contemporánea", creditos: 4, programa: { id: programas[4], nombre: "Maestría en Educación" } },
  { codigo: "ME301", nombre: "Investigación Educativa", creditos: 4, programa: { id: programas[4], nombre: "Maestría en Educación" } },
  { codigo: "ME401", nombre: "Gestión Educativa", creditos: 4, programa: { id: programas[4], nombre: "Maestría en Educación" } }
]).insertedIds;