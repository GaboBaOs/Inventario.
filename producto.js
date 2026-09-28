class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
    infoHtml() {
        return `
            <div>
                <p><strong>Codigo:</strong> ${this.codigo}</p>
                <p><strong>Nombre:</strong> ${this.nombre}</p>
                <p><strong>Cantidad:</strong> ${this.cantidad}</p>
                <p><strong>Costo:</strong> $${this.costo}</p>
            </div>
            <hr>
        `;
    }
}