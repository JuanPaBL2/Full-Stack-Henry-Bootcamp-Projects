class CarritoCompra{
    constructor(){
        this.carrito = [];
    }
    agregarProducto(producto){
        this.carrito.push(producto);
    }
    //Calcula el total de la compra, sumando los precios de todos los productos en el carrito.
    calcularTotal(){
        const totalCompra = this.carrito.reduce((acumulador, elemento) => acumulador + elemento, 0); 
        return totalCompra;
    }
    aplicarDescuento(porcentaje){
        const descuentoAplicado = this.calcularTotal() - (this.calcularTotal() * (porcentaje / 100));
        return descuentoAplicado;
    }
}

module.exports = CarritoCompra;