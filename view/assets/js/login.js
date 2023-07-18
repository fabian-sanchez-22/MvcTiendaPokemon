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

