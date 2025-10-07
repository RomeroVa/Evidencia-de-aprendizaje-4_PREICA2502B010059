// Validacion de promedio de calificaciones por materia
db.inscripciones.aggregate([
  {
    $match: {
      calificacion_final: { $exists: true }
    }
  },
  {
    $group: {
      _id: "$id_materia",
      promedio_calificaciones: { $avg: "$calificacion_final" },
      cantidad_estudiantes: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "materias",
      localField: "_id",
      foreignField: "_id",
      as: "materia"
    }
  },
  { $unwind: "$materia" },
  {
    $project: {
      _id: 0,
      materia: "$materia.nombre",
      promedio_calificaciones: { $round: ["$promedio_calificaciones", 2] },
      cantidad_estudiantes: 1
    }
  },
  { $sort: { promedio_calificaciones: -1 } }
]);