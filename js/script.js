// Función para calcular el promedio
class Alumno {
  constructor(numero) {
    this.numero = numero;
    this.notas = [];
  }

  agregarNota(nota) {
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
      this.notas.push(nota);
    } else {
      console.log("Por favor, ingrese una nota válida entre 0 y 10.");
    }
  }

  calcularPromedio() {
    const suma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return this.notas.length > 0 ? suma / this.notas.length : 0;
  }
}

const alumnos = [];

// Evento de envío del formulario
document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario y se recargue la página
  const alumnoNumero = parseInt(document.getElementById('alumnoNumero').value);
  const nota = parseFloat(document.getElementById('nota').value);
  const alumno = alumnos.find(alumno => alumno.numero === alumnoNumero);
  if (alumno) {
    alumno.agregarNota(nota);
    const promedio = alumno.calcularPromedio();
    mostrarResultado(promedio, alumno);
    localStorage.setItem(`alumno_${alumno.numero}`, JSON.stringify(alumno)); // Almacena el objeto Alumno en localStorage
  }
});

// Carga los datos almacenados en localStorage al cargar la página
window.addEventListener('load', function() {
  for (let i = 1; i <= cantidadAlumnos; i++) {
    const storedAlumno = localStorage.getItem(`alumno_${i}`);
    if (storedAlumno) {
      const alumno = new Alumno(i);
      const notas = JSON.parse(storedAlumno).notas;
      notas.forEach(nota => alumno.agregarNota(nota));
      alumnos.push(alumno);
    }
  }
});

// Función para mostrar el resultado en el DOM
function mostrarResultado(promedio, alumno) {
  const resultado = document.createElement('p');
  resultado.textContent = `El promedio del alumno ${alumno.numero} es: ${promedio.toFixed(2)}`;
  document.body.appendChild(resultado); // Agrega el resultado al final del cuerpo del documento
}
