// function login(){

//     let data =`correo=${txtCorreo.value}&password=${txtPassword.value}`;

// axios.get("../controller/login.create.php?" + data)
// .then(function(response){
// console.log(response);
// try {
//     if (response.data[0].correo == txtCorreo.value) {
//         console.log(response[0].idRol);
//         // window.location.href = "index.php";
//     } 
// } catch (error) {
//     alert("Error al iniciar sesion");
// }

// })
// .catch(function(error){
// console.log(error);
// })
// }

// function extraerRol(idRol){
// axios.get(`../controller/extraerRol.php?id=${idRol}`)
// .then(function(response){
// console.log(response);

// pageRol(data[0].nombreRol)
// })
// }

// function pageRol(nombreRol){
// try {
//     if (nombreRol == "Usuario") {
//     window.location.href = "index.php"
//     } else if (nombreRol == "Administrador") {
//     window.location.href = "inventario.php"
//     }
// } catch (error) {
//     return "No sirvio"
// }
// }


function login() {
    let data = `correo=${txtCorreo.value}&password=${txtPassword.value}`;
    axios.get("../controller/login.create.php?" + data)
        .then(function (response) {
            console.log(response);
            try {
                if (response.data.length > 0) {
                    const userRole = response.data[0].idRol; // Assuming the 'rol' property holds the user's role

                    // Redirect based on the user's role
                    if (userRole === 21) {
                        // Assuming you have a separate view for admin users, change the URL accordingly
                        window.location.href = "inventario.php";
                    } else if (userRole === 22) {
                        // Assuming you have a separate view for regular users, change the URL accordingly
                        window.location.href = "index.php";
                    } else {
                        // Handle any other roles or default case here
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




