<?php include_once "header.php"; ?>

<section class="row justify-content-evenly align-content-around " style="height: 400px;">
    <div class="col-8 row bg-light" style=" background-size: cover; background-repeat: no-repeat; ">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000" style="background-image:url(./assets/img/6224238.jpg)   ;  background-size: cover; background-position: center;  ">
                    <img id="pokemonUno" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/319.png" class="" alt="..." style="width: 40%;">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="text-warning">First slide label</h5>
                        <p class="text-warning">Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000 " style="background-image:url(https://wallpaperaccess.com/full/432108.jpg)   ;  background-repeat: no-repeat; background-size: cover; background-position: center;  ">
                    <img id="pokemonDos" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png" class="" alt="..." style="width: 40%;">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="text-warning">Second slide label</h5>
                        <p class="text-warning">Some representative placeholder content for the second slide.
                        </p>
                    </div>
                </div>
                <div class="carousel-item" style="background-image:url(https://fondosmil.com/fondo/21784.jpg)   ;  background-repeat: no-repeat; background-size: cover; background-position: center;  ">
                    <img id="pokemonTres" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" class="" alt="..." style="width: 40%;">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="text-warning">Third slide label</h5>
                        <p class="text-warning">Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


    </div>
    <div class="col-4 row">
        <img class="img-fluid" src="https://o.remove.bg/downloads/417f2b73-5c6f-47ab-9606-a25f15a34177/png-transparent-ash-ketchum-pikachu-misty-pokemon-poke-ball-pikachu-manga-cartoon-fictional-character-removebg-preview.png" style="height: 350px;" alt="">

    </div>
</section>

<section>
    <div class="row d-flex align-content-center justify-content-evenly">
        <div class="col-12">
            <div class="container my-3 mt-1" id="featureContainer">
                <div class="row mx-auto my-auto justify-content-center">
                    <div id="featureCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="d-flex justify-content-between position-relative top-50 z-1" style="z-index: 1;">
                            <a class="indicator" href="#featureCarousel" role="button" data-bs-slide="prev">
                                <span class="fas fa-chevron-left" aria-hidden="true"></span>
                            </a> 
                            <a class="w-aut indicator" href="#featureCarousel" role="button" data-bs-slide="next">
                                <span class="fas fa-chevron-right" aria-hidden="true"></span>
                            </a>
                        </div>
                        <div class="carousel-inner" id="carousel-cat" role="listbox">


                        </div>

                    </div>
                </div>
            </div>




        </div>
    </div>
</section>
