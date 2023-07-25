var carritoCompras = []
function traerPokemones() {
    return new Promise(response => {
        let urlPoke = localStorage.urlPokemoncito;

        fetch(urlPoke)
            .then((response) => response.json())
            .then((data) => {
                let imagen = data.sprites.other["official-artwork"].front_default
                let altura = (data.height * 0.1).toFixed(1)
                let peso = (data.weight * 0.1).toFixed(1)
                let numero = data.order
                var id = data.id
                let experiencia = data.base_experience
                let vida = data.stats[0].base_stat
                let ataque = data.stats[1].base_stat
                let defensa = data.stats[2].base_stat
                let ataqueEspecial = data.stats[3].base_stat
                let defensaEspecial = data.stats[4].base_stat
                let velocidad = data.stats[5].base_stat

                let gif = data.sprites.versions["generation-v"]["black-white"].animated.front_default
                let gifDos = data.sprites.versions["generation-v"]["black-white"].animated.back_default

                document.getElementById("maqueta").innerHTML = `<div class="col-4 row d-flex align-content-center justify-content-center">
                                                                    <img id="gif" src="..." class="img-fluid" alt="..." style="width: 20%">
                                                                    
                                                                    <h4 id="peso" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="altura" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="orden" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="experiencia" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="vida" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="japones" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="crecimiento" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="forma" class="d-flex justify-content-center"></h4>
                                                                        </div>
                                                                        <div class="col-4 row d-flex">
                                                                           
                                                                            <h1 id="nombrePokemon" class="d-flex justify-content-center text-warning sombra selector" style="font-family: 'Pokemon Solid'"></h1>
                                                                            <img id="imagenPokemon" src="..." class="rounded mx-auto d-block img-fluid" alt="...">
                                                                            <h2 id="id" class="d-flex justify-content-center"></h2>
                                                                            
                                                                        </div>

                                                                    <div class="col-4 row d-flex align-content-center justify-content-center">
                                                                    <img id="gifDos" src="..." class="img-fluid" alt="..." style="width: 20%">
                                                                    <h4 id="ataque" class="d-flex justify-content-center "></h4>
                                                                    <h4 id="ataqueEspe" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="defensa" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="defensaEspe" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="velocidad" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="color" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="habitat" class="d-flex justify-content-center"></h4>
                                                                    <h4 id="generacion" class="d-flex justify-content-center"></h4>
                                                                            </div>`

                document.getElementById("nombrePokemon").innerText = `${data.name}`
                document.getElementById("imagenPokemon").src = imagen
                document.getElementById("gif").src = gif
                document.getElementById("gifDos").src = gifDos
                document.getElementById("id").innerText = `ID: ${id}`
                document.getElementById("peso").innerText = `Peso: ${peso} Kg`
                document.getElementById("altura").innerText = `Altura: ${altura} m`
                document.getElementById("orden").innerText = `Orden: ${numero}`
                document.getElementById("experiencia").innerText = `Experiencia: ${peso}`
                document.getElementById("vida").innerText = `Vida: ${vida}`
                document.getElementById("ataque").innerText = `Ataque: ${ataque}`
                document.getElementById("ataqueEspe").innerText = `Ataque especial: ${ataqueEspecial}`
                document.getElementById("defensa").innerText = `Defensa: ${defensa}`
                document.getElementById("defensaEspe").innerText = `Defensa especial: ${defensaEspecial}`
                document.getElementById("velocidad").innerText = `Velocidad: ${velocidad}`


                let especie = `${data.species.url}`

                fetch(especie)
                    .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('error');
                        }

                    })
                    .then(function (deta) {

                        let colorPoke = deta.color.name
                        let nombreJapones = deta.names[9].name
                        let habitacion = deta.habitat.name
                        let crecimiento = deta.growth_rate.name
                        let generacion = deta.generation.name
                        let forma = deta.shape.name
                        document.getElementById("color").innerText = `Color: ${colorPoke}`
                        document.getElementById("japones").innerText = `Nombre en japonés: ${nombreJapones}`
                        document.getElementById("habitat").innerHTML = `Habitat: ${habitacion}`
                        document.getElementById("crecimiento").innerHTML = `Tasa de crecimiento: ${crecimiento}`
                        document.getElementById("generacion").innerHTML = `Generación: ${generacion}`
                        document.getElementById("forma").innerHTML = `Forma: ${forma}`
                        console.log(deta);
                    })
            });
        response("hello")
    })
}
traerPokemones()

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