// Creación de colección con validación de esquema estudiantes
db.createCollection("estudiantes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["codigo", "nombre", "email", "programa"],
      properties: {
        codigo: {
          bsonType: "string",
          description: "Código único del estudiante - requerido"
        },
        nombre: {
          bsonType: "string",
          description: "Nombre completo - requerido"
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          description: "Email institucional válido"
        },
        programa: {
          bsonType: "object",
          required: ["id", "nombre"],
          properties: {
            id: { bsonType: "objectId" },
            nombre: { bsonType: "string" }
          }
        },
        semestre_actual: {
          bsonType: "int",
          minimum: 1,
          maximum: 12
        },
        promedio_acumulado: {
          bsonType: "double",
          minimum: 0.0,
          maximum: 5.0
        }
      }
    }
  }
});
   

// Creación de colección con validación de esquema profesores
db.createCollection("profesores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "email", "especialidades", "materias_asignadas"],
      properties: {
        nombre: {
          bsonType: "string",
          description: "Nombre completo del profesor - requerido"
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          description: "Email institucional válido - requerido"
        },
        telefono: {
          bsonType: "string",
          description: "Número de contacto del profesor"
        },
        especialidades: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Lista de áreas de especialización"
        },
        materias_asignadas: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["id_materia", "nombre"],
            properties: {
              id_materia: { bsonType: "objectId" },
              nombre: { bsonType: "string" }
            }
          },
          description: "Materias que el profesor imparte"
        },
        horario: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              dia: { bsonType: "string" },
              hora_inicio: { bsonType: "string" },
              hora_fin: { bsonType: "string" }
            }
          },
          description: "Horario semanal del profesor"
        }
      }
    }
  }
});

// Creación de colección con validación de esquema materias
db.createCollection("materias", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["codigo", "nombre", "creditos"],
      properties: {
        codigo: {
          bsonType: "string",
          description: "Código único de la materia - requerido"
        },
        nombre: {
          bsonType: "string",
          description: "Nombre de la materia - requerido"
        },
        descripcion: {
          bsonType: "string",
          description: "Descripción general del contenido programático"
        },
        creditos: {
          bsonType: "int",
          minimum: 1,
          maximum: 10,
          description: "Número de créditos académicos"
        },
        prerrequisitos: {
          bsonType: "array",
          items: { bsonType: "objectId" },
          description: "Referencias a materias prerrequisito"
        },
        programa: {
          bsonType: "object",
          required: ["id", "nombre"],
          properties: {
            id: { bsonType: "objectId" },
            nombre: { bsonType: "string" }
          },
          description: "Programa académico al que pertenece la materia"
        }
      }
    }
  }
});

// Creación de colección con validación de esquema programas
db.createCollection("programas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "facultad", "nivel", "duracion_semestres"],
      properties: {
        nombre: {
          bsonType: "string",
          description: "Nombre del programa académico - requerido"
        },
        facultad: {
          bsonType: "string",
          description: "Facultad o escuela a la que pertenece el programa"
        },
        nivel: {
          enum: ["Pregrado", "Posgrado", "Maestría", "Doctorado"],
          description: "Nivel académico del programa"
        },
        duracion_semestres: {
          bsonType: "int",
          minimum: 1,
          maximum: 20,
          description: "Duración del programa en semestres"
        },
        requisitos_grado: {
          bsonType: "array",
          items: { bsonType: "string" },
          description: "Requisitos para optar al título"
        },
        plan_estudios: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              semestre: { bsonType: "int" },
              materias: {
                bsonType: "array",
                items: { bsonType: "objectId" }
              }
            }
          },
          description: "Plan de estudios organizado por semestre"
        }
      }
    }
  }
});


// Creación de colección con validación de esquema Incripciones
db.createCollection("inscripciones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_estudiante", "id_materia", "periodo", "estado"],
      properties: {
        id_estudiante: {
          bsonType: "objectId",
          description: "Referencia al estudiante inscrito - requerido"
        },
        id_materia: {
          bsonType: "objectId",
          description: "Referencia a la materia inscrita - requerido"
        },
        periodo: {
          bsonType: "string",
          pattern: "^[0-9]{4}-[1-2]$",
          description: "Período académico (ej: 2025-1) - requerido"
        },
        fecha_inscripcion: {
          bsonType: "date",
          description: "Fecha en que se realizó la inscripción"
        },
        estado: {
          enum: ["Inscrito", "Retirado", "Aprobado", "Reprobado"],
          description: "Estado actual de la inscripción"
        },
        calificacion_final: {
          bsonType: ["double", "null"],
          minimum: 0.0,
          maximum: 5.0,
          description: "Nota final del estudiante (si aplica)"
        }
      }
    }
  }
});
    