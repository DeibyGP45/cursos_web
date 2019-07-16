
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

function factura (empresa,cliente,elementos) {
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
        let msg = ` ${this.empresa} ${this.cliente} ${this.cantidad}`
        return msg
}

 Elemento.prototype.mostrarElementos = function () {
         
        let msg = ` ${this.} ${this.} ${this.}`
        return msg
}

  const el01 = new Elemento ('Libro A', 20, 2)

  const el02 = new Elemento('Lapiz HB',2, 10)

  const cliente  = new Empresa ("david a","Santiago 6","639218173")

  const librerEmpresa = new Empresa ("LIBRER SA","Av Foso 12","645273756")

// function generarFactura () {}

//function mostrarFactura() {}

console.log(el01)

Elemento.m

// let x = []


