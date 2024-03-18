// Obtener tareas guardadas del almacenamiento local al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || []; // Obtener tareas guardadas o inicializar como un array vacío
  savedTasks.forEach(task => {
      const taskElement = createTaskElement(task); // Crear un elemento de tarea para cada tarea guardada
      tasksContainer.appendChild(taskElement); // Agregar el elemento de tarea al contenedor de tareas
  });
  renderOrderedTasks(); // Renderizar las tareas ordenadas
});

// Función para guardar las tareas en el almacenamiento local
const saveTasks = () => {
  const taskElements = tasksContainer.children; // Obtener todos los elementos hijos del contenedor de tareas
  const tasks = Array.from(taskElements).map(taskElement => taskElement.textContent); // Crear un array con el texto de cada tarea
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Guardar el array de tareas en el almacenamiento local
};

// Función para agregar una nueva tarea
const addNewTask = event => {
  event.preventDefault();
  const { value } = event.target.taskText; // Obtener el valor del campo de texto de la nueva tarea
  if(!value) return; // Salir de la función si no hay ningún valor
  const taskElement = createTaskElement(value); // Crear un elemento de tarea con el valor
  tasksContainer.prepend(taskElement); // Agregar el elemento de tarea al principio del contenedor de tareas
  event.target.reset(); // Reiniciar el formulario
  saveTasks(); // Guardar las tareas actualizadas
};

// Crear un elemento de tarea con el texto dado
const createTaskElement = text => {
  const task = document.createElement('div'); // Crear un nuevo elemento div para la tarea
  task.classList.add('task', 'roundBorder'); // Agregar clases CSS al elemento
  task.addEventListener('click', changeTaskState); // Agregar un evento de clic para cambiar el estado de la tarea
  task.textContent = text; // Establecer el texto de la tarea
  return task; // Devolver el elemento de tarea creado
};

// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

// Función para establecer la fecha actual en los elementos del DOM
const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

// Función para agregar una nueva tarea (corregida)
const add2NewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

// Función para cambiar el estado de una tarea (hecha o por hacer)
const changeTaskState = event => {
    event.target.classList.toggle('done');
};

// Función para ordenar las tareas por estado (hechas primero)
const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

// Función para renderizar las tareas ordenadas en el contenedor
const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

// Establecer la fecha al cargar la página
setDate();
