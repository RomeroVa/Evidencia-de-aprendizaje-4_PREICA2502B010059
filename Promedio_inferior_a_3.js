// Listar estudiantes con promedio inferior a 3.0
db.estudiantes.aggregate([
  {
    $match: {
      promedio: { $exists: true, $lt: 3.0 }
    }
  },
  {
    $project: {
      _id: 0,
      nombre: 1,
      promedio: 1,
      programa: "$programa.nombre",
      estado: 1
    }
  },
  { $sort: { promedio: 1 } }
]);