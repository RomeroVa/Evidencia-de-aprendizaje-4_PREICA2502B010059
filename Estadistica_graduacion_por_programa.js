// Estadística de graduación por programa
db.graduados.aggregate([
  {
    $group: {
      _id: "$programa.nombre",
      cantidad_graduados: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      programa: "$_id",
      cantidad_graduados: 1
    }
  },
  { $sort: { cantidad_graduados: -1 } }
]);