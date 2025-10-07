// Listar las 10 materias con mayor cantidad de reprobados
db.inscripciones.aggregate([
  {
    $match: {
      estado: "Reprobado"
    }
  },
  {
    $group: {
      _id: "$id_materia",
      cantidad_reprobados: { $sum: 1 }
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
      cantidad_reprobados: 1
    }
  },
  { $sort: { cantidad_reprobados: -1 } },
  { $limit: 10 }
]);