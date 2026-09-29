//Selección de variables del DOM por ID
const inputTarea = document.getElementById('tarea');
const btnAgregar = document.getElementById('btn-agregar');
const lista = document.getElementById('lista-tareas');

//Array para almacenamiento en localStorage
let tareasGuardadas = [];

if (localStorage.getItem('tareas') != null) {
    tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
}

for (let i = 0; i < tareasGuardadas.length; i++) {
    renderizarTareas(tareasGuardadas[i]);
}

//Eventos para las variables de objeto seleccionadas previamente
btnAgregar.addEventListener('click', () => {
    const textoTarea = inputTarea.value;

    if (textoTarea != "") {
        //Llamada a la funcion de renderización
        renderizarTareas(textoTarea);
        //Guarda en el arreglo local y local storage
        tareasGuardadas.push(textoTarea);
        localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
    }
});

//Funciones
function renderizarTareas(textoTarea) {
    //Se crea una nueva tarea en memoria con el texto del valor del inputTarea
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = textoTarea;

    //Se crea un boton como hijo de la tarea que puede eliminar al padre
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "X";
    btnEliminar.addEventListener('click', () => {
        nuevaTarea.remove();
        tareasGuardadas = tareasGuardadas.filter(tarea => tarea !== textoTarea);
        localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
    });

    //Se ramifica el arbol de hijos para la lista de tareas
    nuevaTarea.appendChild(btnEliminar);
    lista.appendChild(nuevaTarea);
    inputTarea.value = "";
}

