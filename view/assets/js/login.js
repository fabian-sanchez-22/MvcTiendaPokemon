
function login() {
    let data = `correo=${txtCorreo.value}&password=${txtPassword.value}`;
    axios.get("../controller/login.create.php?" + data)
        .then(function (response) {
            console.log(response);
            try {
                if (response.data.length > 0) {
                    const userRole = response.data[0].idRol; 

                    if (userRole === 21) {
                        
                        window.location.href = "inventario.php";
                    } else if (userRole === 22) {
                        
                        window.location.href = "index.php";
                    } else {
                        
                        alert("Unknown user role");
                    }
                } else {
                    alert("Error al iniciar sesión");
                }
            } catch (error) {
                alert("Error al iniciar sesión");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}




