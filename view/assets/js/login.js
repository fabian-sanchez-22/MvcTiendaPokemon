function login(){

    let data =`correo=${txtCorreo.value}&password=${txtPassword.value}`;

axios.get("../controller/login.create.php?" + data)
.then(function(response){
console.log(response);
try {
    if (response.data[0].correo == txtCorreo.value) {
        window.location.href = "index.php";
    } 
} catch (error) {
    alert("Error al iniciar sesion");
}




})
.catch(function(error){
console.log(error);
})
}

// function login() {
//     let data = `correo=${txtCorreo.value}&password=${txtPassword.value}`;

//     axios.get("../controller/login.create.php?" + data)
//     .then(function(response) {
//         console.log(response);
//         try {
//         if (response.data[0].correo == txtCorreo.value) {
//             if (response.data[0].rol === "usuario") {
//             window.location.href = "index.php";
//             } else if (response.data[0].rol === "administrador") {
//             window.location.href = "typesPokemon.php";
//             }
//         } 
//         } catch (error) {
//         alert("Error al iniciar sesión");
//         }
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
// }
