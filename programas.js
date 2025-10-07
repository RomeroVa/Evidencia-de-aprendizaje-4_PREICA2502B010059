// 1️⃣ Insertar 5 programas académicos
const programas = db.programas.insertMany([
  {
    nombre: "Ingeniería de Sistemas",
    facultad: "Facultad de Ingeniería",
    nivel: "Pregrado",
    duracion_semestres: 10,
    requisitos_grado: ["Proyecto de grado", "Práctica empresarial"]
  },
  {
    nombre: "Administración de Empresas",
    facultad: "Facultad de Ciencias Económicas",
    nivel: "Pregrado",
    duracion_semestres: 8,
    requisitos_grado: ["Trabajo de grado", "Examen de competencias"]
  },
  {
    nombre: "Psicología",
    facultad: "Facultad de Ciencias Sociales",
    nivel: "Pregrado",
    duracion_semestres: 10,
    requisitos_grado: ["Trabajo de investigación", "Pasantía"]
  },
  {
    nombre: "Derecho",
    facultad: "Facultad de Ciencias Jurídicas",
    nivel: "Pregrado",
    duracion_semestres: 10,
    requisitos_grado: ["Tesis de grado", "Servicio social"]
  },
  {
    nombre: "Maestría en Educación",
    facultad: "Facultad de Educación",
    nivel: "Maestría",
    duracion_semestres: 4,
    requisitos_grado: ["Tesis de investigación"]
  }
]).insertedIds;