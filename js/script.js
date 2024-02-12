// Función para calcular el promedio
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
      suma += notas[i];
    }
    return suma / notas.length;
  }
  
  // Solicitar al usuario la cantidad de alumnos
  const cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos a evaluar:"));
  
  // Solicitar al usuario la cantidad de notas a promediar
  const cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas a promediar por alumno:"));
  
  // Validar que se ingresen valores numéricos positivos
  if (isNaN(cantidadAlumnos) || isNaN(cantidadNotas) || cantidadAlumnos <= 0 || cantidadNotas <= 0) {
    console.log("Por favor, ingrese valores numéricos positivos.");
  } else {
    // Bucle para iterar sobre cada alumno
    for (let i = 1; i <= cantidadAlumnos; i++) {
      const notas = [];
      // Solicitar al usuario las notas para el alumno actual
      for (let j = 0; j < cantidadNotas; j++) {
        const nota = parseFloat(prompt(`Ingrese la nota ${j + 1} para el alumno ${i}:`));
        if (isNaN(nota) || nota < 0 || nota > 10) {
          console.log("Por favor, ingrese una nota válida entre 0 y 10.");
          break;
        }
        notas.push(nota);
      }
      // Calcular y mostrar el promedio de las notas del alumno actual
      if (notas.length === cantidadNotas) {
        const promedio = calcularPromedio(notas);
        console.log(`El promedio del alumno ${i} es: ${promedio.toFixed(2)}`);
      }
    }
  }