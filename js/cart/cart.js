function eliminarProducto(nombre){
    
}
function mostrarCarrito(){

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const carritoTablaBody = document.querySelector('#carritoTablaBody');

    carritoTablaBody.innerHTML = '';

    carrito.forEach(producto => {
        const fila = document.createElement('tr');

        const nombre = document.createElement('td');
        nombre.textContent = producto.nombre;
        fila.appendChild(nombre);

        const precio = document.createElement('td');
        precio.textContent = "$" + producto.precio;
        fila.appendChild(precio);

        const cantidad = document.createElement('td');
        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.value = 1;
        inputCantidad.min = 1;
        inputCantidad.classList.add('form-control');
        inputCantidad.oninput = () => {
            subtotal.textContent = "$" + producto.precio * inputCantidad.value;
        };
        cantidad.appendChild(inputCantidad);
        fila.appendChild(cantidad);

        const subtotal = document.createElement('td');
        subtotal.textContent = "$" + producto.precio * inputCantidad.value;
        fila.appendChild(subtotal);

        const eliminar = document.createElement('td');
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger');
        botonEliminar.onclick = () => eliminarProducto(producto.nombre);
        eliminar.appendChild(botonEliminar);
        fila.appendChild(eliminar);

        carritoTablaBody.appendChild(fila);
    });

}

document.addEventListener('DOMContentLoaded', mostrarCarrito);