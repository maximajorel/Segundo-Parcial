function eliminarProducto(nombre){
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const nuevoCarrito = carrito.filter(producto => producto.nombre !== nombre);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    mostrarCarrito();
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
        precio.textContent = producto.precio;
        fila.appendChild(precio);

        const cantidad = document.createElement('td');
        cantidad.textContent = 1;
        fila.appendChild(cantidad);

        const subtotal = document.createElement('td');
        subtotal.textContent = producto.precio * cantidad.textContent;
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