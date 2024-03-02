// Función para calcular el promedio
// Definición de la clase Alumno que representa a cada estudiante
class Alumno {
  // Constructor que inicializa el número de alumno y un array para almacenar las notas
  constructor(numero) {
    this.numero = numero;
    this.notas = [];
  }

  // Método para agregar una nota al array de notas
  agregarNota(nota) {
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
      this.notas.push(nota);
    } else {
      console.log("Por favor, ingrese una nota válida entre 0 y 10.");
    }
  }

  // Método para calcular el promedio de las notas
  calcularPromedio() {
    const suma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return this.notas.length > 0 ? suma / this.notas.length : 0;
  }
}

// Solicitar al usuario la cantidad de alumnos y notas a evaluar
const cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos a evaluar:"));
const cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas a promediar por alumno:"));

// Validar que se ingresen valores numéricos positivos
if (isNaN(cantidadAlumnos) || isNaN(cantidadNotas) || cantidadAlumnos <= 0 || cantidadNotas <= 0) {
  console.log("Por favor, ingrese valores numéricos positivos.");
} else {
  // Array para almacenar los objetos Alumno
  const alumnos = [];
  // Iterar sobre cada alumno
  for (let i = 1; i <= cantidadAlumnos; i++) {
    const alumno = new Alumno(i); // Crear una instancia de Alumno para cada alumno
    // Solicitar las notas para cada alumno
    for (let j = 0; j < cantidadNotas; j++) {
      const nota = parseFloat(prompt(`Ingrese la nota ${j + 1} para el alumno ${i}:`));
      alumno.agregarNota(nota); // Agregar la nota al objeto Alumno
    }
    alumnos.push(alumno); // Agregar el objeto Alumno al array de alumnos
  }

  // Mostrar el promedio de cada alumno
  alumnos.forEach(alumno => {
    console.log(`El promedio del alumno ${alumno.numero} es: ${alumno.calcularPromedio().toFixed(2)}`);
  });
}
