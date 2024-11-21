
    // Manejo del formulario
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const messageDiv = document.getElementById('message');

        // Validar credenciales
        if (email == "admin@admin.com" && password == "admin") {

            window.location.href = '../html/admin/admin.html';
        } else {
            Swal.fire({
                title: "Ups!",
                text: "Parace que alguno de los datos ingresados son incorrectos",
                icon: "error"
            });
        }
    });