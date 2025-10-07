// Listar los 5 mejores estudiantes por programa basado en su promedio
db.estudiantes.aggregate([
  {
    $match: {
      promedio: { $exists: true }
    }
  },
  {
    $group: {
      _id: "$programa.nombre",
      estudiantes: {
        $push: {
          nombre: "$nombre",
          promedio: "$promedio"
        }
      }
    }
  },
  {
    $project: {
      programa: "$_id",
      top_estudiantes: {
        $slice: [
          { $sortArray: { input: "$estudiantes", sortBy: { promedio: -1 } } }, 5
        ]
      }
    }
  }
]);