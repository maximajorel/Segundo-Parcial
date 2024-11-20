// Mostrar y ocultar secciones
const botonMostrarCalculadora = document.querySelector(
  ".boton-mostrar-calculadora"
);
const botonMostrarTareas = document.querySelector(".boton-mostrar-tareas");
const contenedorCalculadora = document.querySelector(".contenedor-calculadora");
const contenedorTareas = document.querySelector(".contenedor-tareas");

botonMostrarCalculadora.addEventListener("click", () => {
  contenedorCalculadora.classList.toggle("mostrar-seccion");
  contenedorTareas.classList.remove("mostrar-seccion");
});

botonMostrarTareas.addEventListener("click", () => {
  contenedorTareas.classList.toggle("mostrar-seccion");
  contenedorCalculadora.classList.remove("mostrar-seccion");
});

// Tareas

const inputNuevaTarea = document.getElementById("nueva-tarea");
const botonAgregarTarea = document.getElementById("agregar-tarea");
const listaTareas = document.getElementById("lista-tareas");

botonAgregarTarea.addEventListener("click", () => {
  const tareaTexto = inputNuevaTarea.value.trim();
  if (tareaTexto !== "") {
    const li = document.createElement("li");
    li.classList.add("tarea-li");
    li.textContent = tareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("boton-eliminar-tarea");
    botonEliminar.textContent = "Eliminar tarea";
    botonEliminar.addEventListener("click", () => {
      listaTareas.removeChild(li);
    });
    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
    inputNuevaTarea.value = "";
  }
});
