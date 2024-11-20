function eliminarProducto(nombre){
    
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const nuevoCarrito = carrito.filter(producto => producto.nombre !== nombre);

    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));

    mostrarCarrito();
    actualizarTotalCarrito();

}


function actualizarTotalCarrito(){
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const totalCarrito = document.querySelector('#totalCarrito');

    let total = 0;
    carrito.forEach(producto => {
        total += (producto.precio) * (producto.cantidad);
    });

    totalCarrito.textContent =  `$${total}`;
}

function vaciarCarrito(){
    localStorage.removeItem('carrito');

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
        precio.textContent = "$" + producto.precio;
        fila.appendChild(precio);

        const cantidad = document.createElement('td');
        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.value = producto.cantidad;
        inputCantidad.min = 1;
        inputCantidad.max = 10;
        inputCantidad.classList.add('form-control');
        inputCantidad.oninput = () => {
            subtotal.textContent = "$" + producto.precio * inputCantidad.value;
            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const nuevoCarrito = carrito.map(a => {
                if(a.nombre === producto.nombre){
                    a.cantidad = inputCantidad.value;
                }
                return a;
            });
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
            
            actualizarTotalCarrito()

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
    actualizarTotalCarrito();
}

document.addEventListener('DOMContentLoaded', mostrarCarrito);