let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function añadirProducto(nombre,precio, cantidad){
    
    const productoExistenteEnCarrito = carrito.find(producto => producto.nombre === nombre);
    console.log(productoExistenteEnCarrito);
    if(productoExistenteEnCarrito){
        Swal.fire({
            icon: "error",
            title: `El producto ${nombre} ya se encuentra en el carrito`,
            text: "Puedes ir al carrito o agregar mas productos ",
            footer: '<a href="#">Ir al carrito</a>'
          });

    }else{
        carrito.push({nombre,precio,cantidad});
        localStorage.setItem('carrito', JSON.stringify(carrito));
        Swal.fire({
            icon: "success",
            title: `${nombre} fue añadido al carrito`,
            text: "Puedes ir al carrito o agregar mas productos ",
            footer: '<a href="#">Ir al carrito</a>'
          });
    

    }


}