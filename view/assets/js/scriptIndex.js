const categorias = [];

function getTypePokemon() {
    return new Promise((resolve) => {
        fetch("https://pokeapi.co/api/v2/type")
            .then(response => response.json())
            .then(data => {

                data.results.forEach(element => {
                    categorias.push(element)
                });
                resolve("Categorias OK")
                // console.log(data.results)

            })
    })


}

function slideCatPokemon() {
    getTypePokemon().then(response => {
        let categoria;

        categorias.forEach((element, index) => {


            if (index == 0) {
                categoria += `<div class="carousel-item active">
                                        <div class="col-md-2">
                                            <div class="card">
                                                <div class="card-img rounded-circle">
                                                    <a onclick="localUrlPokemon('${element.url}')" href="typesPokemon.php">
                                                    <img src="	https://thumbs.gfycat.com/DampSpanishCleanerwrasse-max-1mb.gif"
                                                        class="img-fluid" >
                                                    </a>
                                                </div>
                                                <div class="card-img-overlays" style="font-weight: bold; text-transform: uppercase; font-size: 24px;">${element.name}</div>
                                            </div>
                                        </div>
                                    </div>`

            } else {
                categoria += `<div class="carousel-item">
                                        <div class="col-md-2">
                                            <div class="card">
                                                <div class="card-img">
                                                    <a onclick="localUrlPokemon('${element.url}')" href="typesPokemon.php">
                                                    <img src="	https://thumbs.gfycat.com/DampSpanishCleanerwrasse-max-1mb.gif"
                                                        class="img-fluid">
                                                        </a>
                                                </div>
                                                <div class="card-img-overlays" style="font-weight: bold; text-transform: uppercase; font-size: 24px;">${element.name}</div>
                                            </div>
                                        </div>
                                    </div>`

            }

        });

        document.getElementById("carousel-cat").innerHTML = categoria
        flipCarrousel()
    });

};
function localUrlPokemon(urlType) {
    localStorage.setItem("url", urlType)
};

slideCatPokemon();


function mostrarCategorias() {
    getTypePokemon().then(response => {
        let categoriass = `<div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-warning btn-lg dropdown-toggle"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias

                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                `
        categorias.forEach((element) => {

            categoriass += `
                            <li><a class="dropdown-item text-warning" onclick="localUrlPokemon('${element.url}')" href="typesPokemon.php"
                                    style="-webkit-text-stroke: 1px rgb(23, 78, 228);">${element.name}</a></li>
                            
                        `

        })
        categoriass += `</ul></div>`
        document.getElementById("mostrarCategoriasPokemon").innerHTML = categoriass
        // document.getElementById("mostrarCategoriasPokemon").style = "overflow:scroll;height:300px;width:22%;position:absolute;z-index: 1;"
    })

}

mostrarCategorias();

var carritoCompras = []
var arregloPokemon = []

function flipCarrousel() {
    let myCarousel = document.querySelectorAll('#featureContainer .carousel .carousel-item');
    myCarousel.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = myCarousel[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
}

function loadAllPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response) => response.json())
        .then(data => {
            // console.log(data.results);
            arregloPokemon = Object.values(data.results)
        })
}

function autoCompletePokemon() {
    let textoBuscar = document.getElementById("txtBuscar").value
    if (textoBuscar.length >= 3) {
        const filtroPokemon = arregloPokemon.filter(filtrarPokemon)
        // console.log(filtroPokemon)

        let lista = `<div class="list-group" >`
        filtroPokemon.forEach(element => {
            iconoPokemon(element.url)
            lista +=
                `<a onclick="detallePokemon('${element.url}')" href="pokemonDetalle.php" class="list-group-item list-group-item-action">${element.name} <img id="icono${element.name}"></a>`

        });
        lista += "</div>"
        document.getElementById("listPokemon").style = "overflow:scroll;height:300px;width:25%;position:absolute;z-index: 1;"
        document.getElementById("listPokemon").innerHTML = lista

    } else {
        document.getElementById("listPokemon").innerHTML = ""
        document.getElementById("listPokemon").style = "overflow:hidden;"
    }


}

function iconoPokemon(urlPokemoncito) {
    fetch(urlPokemoncito)
        .then(response => response.json())
        .then(data => {
            let icono = data.sprites.front_default
            document.getElementById(`icono${data.name}`).src = icono
        })
}

function filtrarPokemon(element) {
    let textoBuscar = document.getElementById("txtBuscar").value
    let nombre = element.name
    return nombre.includes(textoBuscar.toLowerCase())
}

function detallePokemon(urlLink) {
    localStorage.urlPokemoncito = urlLink;
}


function detallePokemones(urlPokemoncito) {
    fetch(urlPokemoncito)
        .then(response = response.json())
        .then(data => {

        })
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    let name
    switch (ev.target.nodeName) {
        case "DIV":
            name = ev.target.id.slice(4)
            break;
        case "IMG":
            name = ev.target.id.slice(3)
            break;
        default:
            break;
    }
    ev.dataTransfer.setData("name", name);
}
function drop(ev) {

    ev.preventDefault();
    backInfoPokemon(ev.dataTransfer.getData("name"))


}
function backInfoPokemon(name) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let cantidad = document.getElementById("cantpikachu").value
            if (cantidad >= 1) {
                let pokemon = new Pokemon(data.name, cantidad, data.base_experience * 100, data.sprites.other["official-artwork"].front_default)
                carritoCompras.push(pokemon)
                localStorage.datosPokemon = JSON.stringify(carritoCompras)
                carritoPokemon()

                const offcanvas = document.getElementById('offcanvasRight');
                const offcanvasInstance = new bootstrap.Offcanvas(offcanvas);
                offcanvasInstance.show();

            } else {
                alert("Error cantidad incorrecta")
            }

        })
}
function carritoPokemon() {
    let items = ''
    carritoCompras.forEach(element => {
        items += `
            <div class="row my-3">
                    <img src="${element._imagen}" style="width: 35%;" alt="">
            </div>
                    <div class="col-8">
                        <div class="row">Nombre: ${element._nombre}</div>
                        <div class="row">Precio: ${element._precio} x ${element._cantidad} = ${element._precio * element._cantidad}</div>
                         <div class="row">Cantidad: ${element._cantidad}</div>
            </div>`
    })
    document.getElementById("listcarpokemon").innerHTML = items
    document.getElementById("cantidadItems").innerHTML = `${carritoCompras.length}+`
}

function traerCompra() {
    let datos = JSON.parse(localStorage.datosPokemon)
    datos.forEach(element => {
        carritoCompras.push(element)

    })
    carritoPokemon();
}

function backInfoPokemon(name) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let cantidad = document.getElementById(`cant${name}`).value
            if (cantidad >= 1) {
                let pokemon = new Pokemon(data.name, cantidad, data.base_experience * 100, data.sprites.other["official-artwork"].front_default)
                carritoCompras.push(pokemon)
                localStorage.datosPokemon = JSON.stringify(carritoCompras)
                carritoPokemon()

                const offcanvas = document.getElementById('offcanvasRight');
                const offcanvasInstance = new bootstrap.Offcanvas(offcanvas);
                offcanvasInstance.show();

            } else {
                alert("Error cantidad incorrecta")
            }

        })
}
function carritoPokemon() {
    let items = ''
    carritoCompras.forEach((element, index) => {
        items += `
            <div class="row my-3">
                    <img src="${element._imagen}" style="width: 35%;" alt="">
            </div>
                <div class="col-6">
                        <div class="row">Nombre: ${element._nombre}</div>
                        <div class="row">Precio: ${element._precio} x ${element._cantidad} = ${element._precio * element._cantidad}</div>
                        <div class="row">Cantidad: <input onclick="actCantidad(this,${index})" onkeyup="actCantidad(this,${index})" class="form-control" type="number" value="${element._cantidad}"></div>
                        <div class="col-2">
                            <a onclick="eliminarPokemon('${index}')" class="btn btn-sm btn-danger">X</a>
                        </div>
                </div>`
    })
    document.getElementById("listcarpokemon").innerHTML = items
    document.getElementById("cantidadItems").innerHTML = `${carritoCompras.length}+`
    totalCompra()
}

function eliminarPokemon(index) {
    carritoCompras.splice(index, 1)
    localStorage.datosPokemon = JSON.stringify(carritoCompras)
    carritoPokemon()
}
function totalCompra() {
    let totalPagar = 0
    carritoCompras.forEach(element => {
        totalPagar += (element._precio * element._cantidad)
    });
    document.getElementById("totalPagar").innerHTML = `<b>Total: $ </b> ${totalPagar}`
}

function actCantidad(element, index) {

    // console.log(element.value);
    // console.log(index);
    carritoCompras[index]._cantidad = element.value
    localStorage.datosPokemon = JSON.stringify(carritoCompras)
    carritoPokemon()

}

