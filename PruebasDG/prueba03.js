
/**
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
 * Lapices de 2e compro 10e 
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

const empresa = { // EMPRESA 

        Nombre: "LIBRER SA",
        Telefono: "645273756",


}

const cliente = { // CLIENTE - EMPRESA 
        Nombre: "David A",
        Direccion: "Santiago 6"
}

function Elemento(descripcion,precioUnidad,cantidad) {

    this.descripcion = descripcion
    this.precioUnidad =  precioUnidad
    this.cantidad = cantidad
}

function factura () {
        
        
}

 Elemento.prototype.mostrarElementos = function () {
         
        let msg = ` ${this.descripcion} ${this.precioUnidad} ${this.cantidad}`
        return msg
}

  const elemento01 = new Elemento ('Libro A', 20, 10)



// function generarFactura () {}

//function mostrarFactura() {}

console.log()

Elemento.m

let x = []


