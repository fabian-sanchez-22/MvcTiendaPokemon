function readLogin(){
axios.post("../controller/login.read.php")
.then(function(response){
console.log(response);

if (!response.data){
window.location.href = "login.php";
}

})
.catch(function(error){
console.log(error);
})
}



function deleteLogin(){
axios.post("../controller/login.delete.php")
.then(function(response){
console.log(response);
if (response.data) {
    window.location.href = "login.php";
}
})
.then(function(error){
console.log(error);
});

}

readLogin();

window.onbeforeunload = function (){
readLogin();
}