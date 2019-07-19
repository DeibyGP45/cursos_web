
/**DATOS
 * Librer SA
 * 
 * david a
 * 
 * santiago 6
 * 
 * Nfactura 23
 * 
 * 
 * Libro de 20e compro 2ud.
 * Lapices de 2e compro 10ud.
 * 
 * Iva 21%
 * 
 */

/**Function generarFactura
 * 
 * @description funcion que recopila todos los datos de la enpresa y los productos listos para la compra  
 * @param   
 * @returns 
 * 
 * 
 */

 const {elementos,el02,cliente, librerEmpresa} = require ('./prueba03_datos')

function Empresa (nombre,direccion,telefono) {

        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
        
}

function Elemento(descripcion,precioUnidad,cantidad) {

    this.descripcion = descripcion
    this.precioUnidad =  precioUnidad
    this.cantidad = cantidad
}

function Factura (empresa,cliente,elementos) {
        /**
         * Empresa Librer
         * 
         * cliente 
         * 
         * Datos factura 
         * 
         * Elementos 
         * 
         * importe + iva = total
         */

         this.empresa = empresa
         this.cliente = cliente
         this.datosFactura =
         this.elementos = elementos

        
}

Factura.prototype.mostrarFactura = function () {
        let msg = 
        `
                ${this.empresa}
                 ${this.cliente}
                ${this.cantidad}
           `
        return msg
}

/*  Elemento.prototype.mostrarElementos = function () {
         
        let msg = ` ${this.} ${this.} ${this.}`
        return msg
} */

// function generarFactura () {}

//function mostrarFactura() {}


 //const fact01 = new Factura (librerEmpresa,cliente,el01)

console.log(el01.cantidad)

console.log(fact01.mostrarFactura())

module.exports.Elemento = Elemento
module.exports.Empresa = Empresa

// let x = []


