var id;

function create(){
let data = `txtRol=${document.getElementById('txtRol').value}`

const options = {
method:'POST',
body: data,
headers: {
"Content-Type": "application/x-www-form-urlencoded",
},
};
    fetch("../controller/roles.create.php", options)
    .then(response => response.json())
    .then((data) => {
        alertify.success(data);
        read();
    })  
}

function read(){
    fetch("../controller/rol.read.php")
    .then (response => response.json())
    .then ((data) => {
        console.log(data);

        let table = "";
    
        data.forEach((element, index) => {
            table += `<tr>`
            table += `<th scope="row">${index + 1}</th>`;
            table += `<td>${element.nombreRol}</td>`;
            table += `<td>
        <div class="form-check form-switch">
            <input onclick="updateEstado(${element.id},'${element.estado}')" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            <label class="form-check-label" for="flexSwitchCheckDefault">${element.estado == "A" ? "Activo" : "Inactivo"}</label>
        </div>
                    </td>`;
            table += `<td>
                        <a onclick="readUpdate(${element.id})" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updateModal" ><i class="fa-solid fa-square-pen fa-flip"></i></a>
                        <a onclick="readDelete(${element.id},'${element.nombreRol}')" class="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="fa-solid fa-trash fa-beat"></i></a>
                        </td>`;
            table += `</tr>`;
        });
        document.getElementById("tableBodyRol").innerHTML = table;
        new DataTable("#tableRol",{
        retrieve: true,
        language: {
        url: "./assets/json/es-ES.json",
        },
        dom: "Bfrtip",

        //Personalizando los botones del dataTable
        buttons: [
            {
                extend: "colvis",
                text: '<i class="fa-solid fa-filter fa-fade"></i>',
                tittleAttr: "Filtrar",
                className: "filtrar" ,
            }, 

            {
                extend: "excel" ,
                text: '<i class="fa-solid fa-file-excel fa-beat"></i>',
                tittleAttr: "Excel",
                className: "excel" ,
                exportOptions:{
                    columns: [0, 1, 2],
                },
            }, 

            {
                extend: "print",
                text: '<i class="fa-solid fa-print fa-beat"></i>',
                tittleAttr: "Imprimir",
                className: "imprimir" ,
                exportOptions:{
                    columns: [0, 1, 2],
                },
                
            }, 
            
            {
                extend: "copy",
                text: '<i class="fa-solid fa-copy fa-beat"></i>',
                tittleAttr: "Copiar",
                className: "copiar" ,
                exportOptions:{
                    columns: [0, 1, 2],
                },
                
            },
        {
            download: "open",
            extend: "pdf",
                text: '<i class="fa-solid fa-file-pdf fa-beat"></i>',
                tittleAttr: "PDF",
                className: "pdf" ,
                exportOptions:{
                    columns: [0, 1, 2],
                },
        },
        ],
        });
        readEstado();
    });
    }

    function update (){
    let data = `txtRolMod=${txtRolMod.value}&id=${this.id}`
        const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        }
    fetch("../controller/rol.update.php", options)
    .then((response) => response.json())
    .then((data) => {
        alertify.success(data);
    read();
    });
    }

    function deletes() {
        let data = `id=${id}`;
        const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        }
    fetch("../controller/rol.delete.php", options)
    .then((response) => response.json())
    .then((data) => {
        alertify.success(data);
    read();
    });
    }


    function readEstado(){
        let estado = document.getElementsByClassName("form-check-input");
        let labelEstado = document.getElementsByClassName("form-check-label");
        for (let i = 0; i < estado.length; i++) {
            if(labelEstado[i].innerHTML == "Activo"){
                estado[i].setAttribute("checked", "")
            }
        }
    }



    function updateEstado(id, estado){
        const options ={
            method: "POST",
            body: `id=${id}&estado=${estado}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    fetch("../controller/rol.updateEstado.php", options)
    .then(response => response.json())
    .then((data) => {
    console.log(data)
    read();
    })
    }



    function readUpdate(id){
        fetch (`../controller/rol.readupdate.php?id=${id}`)
        .then((response) => response.json())
        .then ((data) => {
        console.log(data)
        // document.getElementById("txtRolMod").value = data[0].nombreRol;
        txtRolMod.value = data[0].nombreRol;

        // Alimentando la variable global
        this.id = data[0].id;
        });
    }

    function readDelete(id, nombreRol){
    this.id = id;
        labelDelete.innerHTML = `Esta seguro de eliminar el Rol? ${nombreRol}`;
    }
    
read();