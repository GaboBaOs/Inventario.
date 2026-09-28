class Inventario {
    constructor() {
        this.productos = [];
    }
    agregar(producto) {
        this.productos.push(producto);
    }
    buscar(codigo) {
        for (let producto of this.productos) {
            if (producto.codigo == codigo) {
                return producto;
            }
        }
        return undefined;
    }
    eliminar(codigo) {
        for (let posicion = 0; posicion < this.productos.length; posicion++) {
            if (this.productos[posicion].codigo == codigo) {
                return this.productos.splice(posicion, 1)[0];
            }
        }
        return undefined;
    }
    insertar(producto, posicion) {
        this.productos.splice(posicion, 0, producto);
    }
    listar() {
        let resultado = "";
        for (let producto of this.productos) {
            resultado += producto.infoHtml();
        }
        return resultado;
    }
    listarInverso() {
        let resultado = "";
        for (let posicion = this.productos.length - 1; posicion >= 0; posicion--) {
            resultado += this.productos[posicion].infoHtml();
        }
        return resultado;
    }
}