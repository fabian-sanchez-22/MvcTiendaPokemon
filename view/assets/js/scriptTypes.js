const pokemon = []
var categoria = ""
var carritoCompras = []

function traerDatos() {
    return new Promise(response => {
        let url = localStorage.url;
        console.log(url);
        fetch(url)
        
            .then((response) => response.json())
            .then((data) => {
                console.log(data.name);
                document.getElementById("categoriasNombre").innerHTML = `CATEGORIA  ${data.name}`;
                console.log(data)
                data.pokemon.forEach(element => {
                    pokemon.push(element);
                    detallePokemon(element)
                    categoria = data.name
                });
                // console.log(data)
                response("Hola")
            })

    })
}

function mostrarPokemon() {
    let listaPokemon = "";
    traerDatos().then(response => {
      pokemon.forEach(element => {
        listaPokemon += `
          <div class="card border border-secondary border-1 rounded-5 mb-3 mx-5" style="max-width: 540px; background-image: url('https://images4.alphacoders.com/574/574726.jpg'); background-repeat: no-repeat;  background-position: center; background-size: cover;" draggable="true" ondragstart="drag(event)" id="card${element.pokemon.name}">
            <div class="row g-0">
              <div class="col-md-4">
                <a onclick="localUrlPokemones('${element.pokemon.url}')" href="pokemonDetalle.php">
                  <img id="img${element.pokemon.name}" src="" class="img-fluid rounded-start" alt="...">
                  <div class="col-12 d-flex justify-content-center">
                    <p id="order${element.pokemon.name}" class="card-text fw-bold"></p>
                  </div>
                </a>
              </div>
              <div class="col-md-8">
                <div class="card-body text-center">
                  <h5 style="font-family: 'Pokemon Solid'" class="card-title text-center ">${element.pokemon.name}</h5> 
                  <p id="peso${element.pokemon.name}" class="card-text fw-bold"></p>
                  <div class="d-flex align-items-center col-12 justify-content-around">
                    <button onclick="backInfoPokemon('${element.pokemon.name}')" type="button" class="btn btn-primary text-warning fw-bold">Comprar</button>
                    <input type="number" class="form-control" id="cant${element.pokemon.name}" min="0">
                  </div>
                </div>
              </div>
            </div>
          </div>`;
      });
      document.getElementById("listaPokemon").innerHTML = listaPokemon;
    });
  }
  

mostrarPokemon();

function detallePokemon(pokemon) {
    console.log(pokemon);
    fetch(pokemon.pokemon.url)
  
        .then(response => response.json())
        .then(data => {
        

            let imagen = data.sprites.other["official-artwork"].front_default
            let altura = (data.height * 0.1).toFixed(1)
            let peso = (data.weight * 0.1).toFixed(1)
            let numero = data.order
            let id = data.id



            document.getElementById(`img${pokemon.pokemon.name}`).src = imagen
            document.getElementById(`peso${pokemon.pokemon.name}`).innerText = `\n Peso: ${peso} Kg \n Altura: ${altura} m \n Numero: ${numero}`
            document.getElementById(`order${pokemon.pokemon.name}`).innerHTML = `${id}`

            let tipos = "Tipo(s): ";
            data.types.forEach(element => {
                if (element.type.name == categoria) {
                    tipos += `${element.type.name}`
                } else {
                    tipos += `<a onclick="localUrlPokemon('${element.type.url}')" href="typesPokemon.php"> ${element.type.name} </a>`
                }

                console.log(element.type.name)
                // console.log(element.type.url)

            });
            document.getElementById(`tipos${pokemon.pokemon.name}`).innerHTML = tipos
            // document.getElementById(`altura${pokemon.pokemon.name}`).innerText = altura * 0.1 + " " + "metros"


        })
}

function localUrlPokemones(urlPokemones) {
    localStorage.urlPokemoncito = urlPokemones
};


function localUrlPokemon(urlType) {
    localStorage.setItem("url", urlType)
};

// funcion drag and drop

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
            console.log(data.id);
            let cantidad = document.getElementById(`cant${name}`).value
            if (cantidad >= 1) {
                let pokemon = new Pokemon(data.name, cantidad, data.base_experience * 100, data.sprites.other["official-artwork"].front_default, data.id)
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
// function carritoPokemon() {
//     let items = '';
//     carritoCompras.forEach((element, index) => {
//         items += `
//             <div class="col-2">
//                             <a onclick="eliminarPokemon('${index}')" class="btn btn-sm btn-danger">X</a>
//                         </div>
//             <div class="row my-3">
//                     <img src="${element._imagen}" style="width: 35%;" alt="">
//             </div>
            
//                 <div class="col-6">
//                         <div class="row">Nombre: ${element._nombre}</div>
//                         <div class="row">Precio: ${element._precio} x ${element._cantidad} = ${element._precio * element._cantidad}</div>
//                         <div class="row">Cantidad: <input onclick="actCantidad(this,${index})" onkeyup="actCantidad(this,${index})" class="form-control" type="number" value="${element._cantidad}"></div>
                        
//                 </div>`
//     })
//     document.getElementById("listcarpokemon").innerHTML = items
//     document.getElementById("cantidadItems").innerHTML = `${carritoCompras.length}+`
//     totalCompra()
// }

// function traerCompra() {
//     let datos = JSON.parse(localStorage.datosPokemon)
//     datos.forEach(element => {
//         carritoCompras.push(element)

//     })
//     carritoPokemon();
// }

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