/*
//CarritoInstance deberia ser una instancia de la clase CarritoCompra
//CarritoCompra deberia ser una clase.
//Deberia guardar productos en una lista */


const CarritoCompra = require("./index");

let carritoInstance = new CarritoCompra;

//CORROBORAR LA CLASE
describe("revisar clase carrito de compras", () => {
    it("deberia ser una clase", () => {
        expect(carritoInstance instanceof CarritoCompra).toBe(true);
    });

    it("deberia tener una lista", () => {
        expect(carritoInstance.carrito).toEqual([]);
    });

    //CORROBORAR QUE LOS METODOS ESTEN DEFINIDOS
    describe("revisar definicion de metodos de clase", () => {
        it("deberia tener un metodo llamado agregarProductos", () => {
            expect(typeof carritoInstance.agregarProducto).toBe('function');
        });
        it("deberia tener un metodo llamado calcularTotal", () => {
            expect(typeof carritoInstance.calcularTotal).toBe('function');
        });
        it("deberia tener un metodo llamado aplicarDescuentos", () => {
            expect(typeof carritoInstance.aplicarDescuento).toBe('function');
        });
    });

    //CORROBORAR QUE LOS METODOS FUNCIONEN
    describe("Corroborar funcionamiento de metodos de la clase", () => {
        it("el metodo calcularTotal", () => {
            let producto1 = {
                precio: 1,
                cantidad: 2
            }
            let producto2 = {
                precio: 4,
                cantidad: 1
            }
            carritoInstance.agregarProducto(producto1);
            carritoInstance.agregarProducto(producto2);
    
            const totalEsperado = (producto1.precio * producto1.cantidad) + (producto2.precio * producto2.cantidad);
    
            const totalCalculado = carritoInstance.calcularTotal();
    
            expect(totalCalculado).toBe(totalEsperado);
        })
    })
});

