class Pokemon {
    constructor(nombre, cantidad, precio, imagen, id) {
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._precio = precio;
        this._imagen = imagen;
        this._id = id;
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    get cantidad() {
        return this._cantidad
    }

    set cantidad(nuevaCantidad) {
        this._cantidad = nuevaCantidad;
    }
    get precio() {
        return this._precio
    }

    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }
    get imagen() {
        return this._imagen
    }

    set imagen(nuevaImagen) {
        this._imagen = nuevaImagen;
    }
    get id() {
        return this._id
    }

    set imagen(nuevaId) {
        this._id = nuevaId;
    }

}