// 4️⃣ Insertar 20 estudiantes con relaciones válidas
db.estudiantes.insertMany([
  // Ingeniería de Sistemas
  {
    codigo: "EST001",
    nombre: "María Fernanda López García",
    email: "maria.lopez@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b76"), nombre: "Ingeniería de Sistemas" },
    semestre_actual: 3,
    promedio_acumulado: 4.1
  },
  {
    codigo: "EST002",
    nombre: "Carlos Andrés Ruiz Moreno",
    email: "carlos.ruiz@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b76"), nombre: "Ingeniería de Sistemas" },
    semestre_actual: 5,
    promedio_acumulado: 3.8
  },
  {
    codigo: "EST003",
    nombre: "Daniela Pérez Salazar",
    email: "daniela.perez@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b76"), nombre: "Ingeniería de Sistemas" },
    semestre_actual: 2,
    promedio_acumulado: 4.3
  },
  {
    codigo: "EST004",
    nombre: "Juan Sebastián Gómez Ortiz",
    email: "juan.gomez@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b76"), nombre: "Ingeniería de Sistemas" },
    semestre_actual: 7,
    promedio_acumulado: 3.9
  },

  // Administración de Empresas
  {
    codigo: "EST005",
    nombre: "Laura Natalia Cárdenas Vega",
    email: "laura.cardenas@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b77"), nombre: "Administración de Empresas" },
    semestre_actual: 4,
    promedio_acumulado: 4.0
  },
  {
    codigo: "EST006",
    nombre: "Andrés Felipe Medina Torres",
    email: "andres.medina@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b77"), nombre: "Administración de Empresas" },
    semestre_actual: 6,
    promedio_acumulado: 3.6
  },
  {
    codigo: "EST007",
    nombre: "Valentina Ríos Hernández",
    email: "valentina.rios@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b77"), nombre: "Administración de Empresas" },
    semestre_actual: 8,
    promedio_acumulado: 4.2
  },
  {
    codigo: "EST008",
    nombre: "Santiago Morales Castillo",
    email: "santiago.morales@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b77"), nombre: "Administración de Empresas" },
    semestre_actual: 1,
    promedio_acumulado: 3.5
  },


// Psicología
{
    codigo: "EST009",
    nombre: "Camila Torres Benítez",
    email: "camila.torres@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b78"), nombre: "Psicología" },
    semestre_actual: 2,
    promedio_acumulado: 4.4
  },
  {
    codigo: "EST010",
    nombre: "Miguel Ángel Rivera Soto",
    email: "miguel.rivera@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b78"), nombre: "Psicología" },
    semestre_actual: 5,
    promedio_acumulado: 3.7
  },
  {
    codigo: "EST011",
    nombre: "Sara Juliana Ramírez León",
    email: "sara.ramirez@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b78"), nombre: "Psicología" },
    semestre_actual: 6,
    promedio_acumulado: 4.1
  },
  {
    codigo: "EST012",
    nombre: "David Esteban Peña Cruz",
    email: "david.pena@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b78"), nombre: "Psicología" },
    semestre_actual: 3,
    promedio_acumulado: 3.9
  },

  // Derecho
  {
    codigo: "EST013",
    nombre: "Paula Hernández Ríos",
    email: "paula.hernandez@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b79"), nombre: "Derecho" },
    semestre_actual: 1,
    promedio_acumulado: 4.0
  },
  {
    codigo: "EST014",
    nombre: "Felipe Navarro Mendoza",
    email: "felipe.navarro@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b79"), nombre: "Derecho" },
    semestre_actual: 7,
    promedio_acumulado: 3.8
  },
  {
    codigo: "EST015",
    nombre: "Isabella Duarte Montoya",
    email: "isabella.duarte@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b79"), nombre: "Derecho" },
    semestre_actual: 5,
    promedio_acumulado: 4.3
  },
  {
    codigo: "EST016",
    nombre: "Tomás Ramírez Patiño",
    email: "tomas.ramirez@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b79"), nombre: "Derecho" },
    semestre_actual: 9,
    promedio_acumulado: 3.7
  },

  // Maestría en Educación
  {
    codigo: "EST017",
    nombre: "Natalia Orozco Marín",
    email: "natalia.orozco@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b7a"), nombre: "Maestría en Educación" },
    semestre_actual: 2,
    promedio_acumulado: 4.6
  },
  {
    codigo: "EST018",
    nombre: "Juan David Castaño López",
    email: "juan.castano@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b7a"), nombre: "Maestría en Educación" },
    semestre_actual: 3,
    promedio_acumulado: 4.2
  },
  {
    codigo: "EST019",
    nombre: "Mariana Gutiérrez Restrepo",
    email: "mariana.gutierrez@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b7a"), nombre: "Maestría en Educación" },
    semestre_actual: 1,
    promedio_acumulado: 4.8
  },
  {
    codigo: "EST020",
    nombre: "Santiago Pérez Cárdenas",
    email: "santiago.perez@universidad.edu.co",
    programa: { id: ObjectId("68e4481f2f591af846402b7a"), nombre: "Maestría en Educación" },
    semestre_actual: 4,
    promedio_acumulado: 4.3
  }
]);
